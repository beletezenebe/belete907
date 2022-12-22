import {show_mango} from './db/mongo'
show_mango().then(data => {
  // do something with data
  console.log(data)
})
.catch(error => {
 // do something with error
 console.log(error)
})