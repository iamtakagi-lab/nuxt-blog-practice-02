import defaultEyeCatch from '~/assets/img/jpg/defaultEyeCatch.jpg'
import {createClient} from '../plugins/contentful'

export const state = () => ({
  posts: [],
  tags: [],
  categories: [],
  topPosts: []
});

export const getters = {
  setEyeCatch: () => (post) => {
    if (!!post.fields.image && !!post.fields.image.fields) return { url: `https:${post.fields.image.fields.file.url}`, title: post.fields.image.fields.title }
    else return { url: defaultEyeCatch, title: 'defaultImage' }
  },

  draftChip: () => (post) => {
    if (!post.fields.publishDate) return 'draftChip'
  },

  linkTo: () => (name, slug) => {
    return { name: `${name}-slug`, params: { slug: slug } }
  },

  postBySlug: state => (paramSlug) => {
    for (let i = 0; i < state.posts.length; i++) {
      const post = state.posts[i];
      const slug = post.fields.slug;
      if (slug !== null && slug !== undefined) {
        if(slug === paramSlug){
          return post;
        }
      }
    }
  },

  postsByCategory: state => (currentCategory) => {
    const posts = []
    for (let i = 0; i < state.posts.length; i++) {
      const post = state.posts[i]
      if (currentCategory === post.fields.category) posts.push(post)
    }
    return posts
  },

  postsByTag: state => (currentTag) => {
    const posts = []
    for (let i = 0; i < state.posts.length; i++) {
      const post = state.posts[i]

      if (post.fields.tags) {

        const tag = post.fields.tags.find(tag => tag === currentTag)

        if (tag) posts.push(post)
      }
    }
    return posts
  },

  postsByLimit: state => (limit) => {
    return state.posts.slice(0, limit);
  },

  postsByYear: state => (year) => {
    const posts = []
    for (let i = 0; i < state.posts.length; i++) {
      const post = state.posts[i]
      if (new Date(post.fields.publishDate).getFullYear() === year) posts.push(post)
    }
    return posts
  },

  postsByYearMonth: state => (year, month) => {
    const posts = []
    for (let i = 0; i < state.posts.length; i++) {
      const post = state.posts[i]
      const date = new Date(post.fields.publishDate);
      if (date.getFullYear() === year && date.getMonth()+1 === month) posts.push(post)
    }
    return posts
  }
}

export const mutations = {
   setPosts(state, payload) {
    state.posts = payload
  },

  async setLinks(state, entries) {
    state.categories = [];
    state.tags = [];

    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];

      const category = entry.fields.category;
      if (category !== null && category !== undefined) {
        const categoryString = String(category);
        if (!state.categories.includes(categoryString)) {
          state.categories.push(categoryString)
        }
      }

      const tags = [entry.fields.tags];

      tags.map(tag => {
        if (tag !== null && tag !== undefined) {
          const tagString = String(tag);
          const split = tagString.split(",");
          split.map(splitTag => {
            if (!state.tags.includes(splitTag)) {
              state.tags.push(splitTag)
            }
          })
        }
      });
    }
  },

 async setTopPosts(state){
    //Google Analytics 人気記事取得
    state.topPosts = [];

    const resdata = await this.$axios.$get('/api/ga-tops')
    const rows = resdata.reports[0].data.rows;

    //console.log(state.posts)

    for (var i = 0; i < rows.length; i++) {
      const item = rows[i]
      const slug = item.dimensions.toString().split('/')[2];
      const pv = Number(item.metrics[0].values)
      state.topPosts.push({slug: slug, pv: pv })
    }

    //console.log(state.topPosts);
    //console.log(resdata.reports[0].data.rows);
  }
}

export const actions = {

  async getPosts({ commit, state }) {
    //contentful posts 取得
    await createClient().getEntries({
      content_type: process.env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.publishDate',
      include: 1
    }).then(async (res) => {
     await commit('setLinks', res.items)
     await commit('setPosts', res.items)
    
    //Google Analytics 人気記事取得
    state.topPosts = [];

    function postBySlug(paramSlug) {
      for (let i = 0; i < state.posts.length; i++) {
        const post = state.posts[i];
        const slug = post.fields.slug;
        if (slug !== null && slug !== undefined) {
          if(slug === paramSlug){
            return post;
          }
        }
      }
    }

    const resdata = await this.$axios.$get('/api/ga-tops')
    const rows = resdata.reports[0].data.rows;

    //console.log(state.posts)

    for (var i = 0; i < rows.length; i++) {
      const item = rows[i]
      const slug = item.dimensions.toString().split('/')[2];
      const pv = Number(item.metrics[0].values)

      const post = postBySlug(slug);
      if(post) {
        state.topPosts.push({post: post, slug: slug, pv: pv})
      }
    }

    //console.log(state.topPosts)

    //console.log(state.topPosts);
    //console.log(resdata.reports[0].data.rows);
  
    }).catch(console.error)
  }

}
