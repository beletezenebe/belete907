
import { mongoose } from "mongoose"
const dbURL = 'mongodb+srv://belete:password122@beletenode.czkhc.mongodb.net/belete?retryWrites=true&w=majority';

export function show_mango(){
  console.log("starting...")
  return   mongoose.connect(dbURL,{ useNewUrlParser: true ,useUnifiedTopology: true })
}




// export default client.db() // select database