import request from "request"
import cheerio from "cheerio";

class Fetcher {

  static fetch = (url, callBack) => {
    const requestUrl = "http://turbo01.production.indix.tv:9000/ondemand/fetch?app_id=c98a317a&app_key=6a0732d5402f4d98debc99b8917dbb0e&hacks=false&url=" + url
    request(requestUrl, (err, response, body) => {
      if(err)
      {
        console.log({"error" : response.status})
      }
      callBack(body)
    })
  }
}

export default Fetcher;