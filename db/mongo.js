import { MongoClient } from "mongodb"
const DB_URI = 'mongodb+srv://belete:password122@beletenode.czkhc.mongodb.net/belete?retryWrites=true&w=majority';
console.log("dgvfvfjh")
const client = new MongoClient(DB_URI,{ useNewUrlParser: true ,useUnifiedTopology: true })
// mongoose.connect(DB_URI,{ useNewUrlParser: true ,useUnifiedTopology: true }).then((result) => app.listen(8080)).catch((err) => console.log(err));
export function show_mango(){
  console.log("starting...")
  return   client.connect()
}

export default client.db() // select database