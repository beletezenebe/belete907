import {show_mango} from './db/mongo'
show_mango().then(
  console.log("scucess")
  ).catch((err) =>
     console.log(err)
    );

