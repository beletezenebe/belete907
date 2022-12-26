import {show_mango} from '../db/mongo.js'
show_mango().then(
  console.log("scucess")
  ).catch((e) =>
     console.log(e)
    );

