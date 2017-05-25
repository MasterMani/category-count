import request from "request"
import Fetcher from "./fetch";

class categoryCountProcessor {
  constructor ($, selectorObj)
  {
    this.$ = $
    this.selectorObj = selectorObj
  }

  class FetchingCategoryPages {
    const categoryElement = $(selectorObj.selector)
    if(categoryElement.length > 0)
    
    request(requestUrl, (err, response, body) => {
      if(err)
      {
        console.log({"error" : response.status})
      }
      callBack(body)
    })
  }
}
}