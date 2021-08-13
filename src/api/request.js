import axios from "axios";

// const WEB_URL = 'http://1.117.162.173:8010'
// const WEB_URL = 'http://localhost:8010'
const WEB_URL = 'http://39.108.91.47:8010'

const util = {
  // 请求封装
  post(url, params) {
    return new Promise((resolve, reject) => {
      axios.post(
        WEB_URL + url,
        params
      ).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err)
      })
    });
  },
}
export default util;