import Vue from 'vue'
import moment from 'moment-timezone';
moment.tz.setDefault("Asia/Tokyo");

Vue.filter('format-date', function (value) {
  const date = moment(value)
  return date.format("YYYY/MM/DD HH:mm");
})

Vue.filter('from-now', function (value) {
  const date = moment(value)
  date.locale('ja');
  return date.fromNow();
})
