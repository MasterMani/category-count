import settings from './site-list'
import Fetcher from './fetch.js'

const categoryUrl = settings.startingUrl
const call = function(data){
  console.log(data)
}
console.log(Fetcher.fetch(categoryUrl, call))

