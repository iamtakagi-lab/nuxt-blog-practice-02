<template>
  <div class="policy">
    <h2>
      プライバシーポリシー 個人情報について
    </h2>
    <p>
      当サイトでは、メールアドレス・パスワードのような個人情報は一切収集していません。
    </p>
    <h2>
      当サイトが使用しているアクセス解析ツールについて
    </h2>
    <p>
     当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
     このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくは
      <a href = "https://policies.google.com/privacy">ここ</a> をクリックしてください。<br/><br/>

      <span style="font-weight: bold;">また、更なる記事の閲覧性向上を目的とした、「GoogleAPI」から「Googleアナリティクス」のPV数を取得、それをランキングとしてサイトに表示するといったことも行っております。</span>
    </p>
    <h2>
      免責事項
    </h2>
    <p>
      当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
      当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
      当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
    </p>
    <h2>
      プライバシーポリシーの変更について
    </h2>
    <p>
      当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。
      修正された最新のプライバシーポリシーは常に本ページにて開示されます。
    </p>
  </div>
</template>

<script>
    export default {
        name: "privacy-policy"
    }
</script>

<style scoped lang = "scss">
  .policy {
    padding: 20px;
    margin: 10px auto;
    background: white;
    max-width: 100%;
    border-radius: 1em;
  }

  h2 {
    font-size: 18px;
    text-align: left;
  }

   p {
    text-align: left;
    font-size: 14px;
    margin-bottom: 30px;
  }
</style>
