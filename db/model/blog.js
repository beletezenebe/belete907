
import { mongoose } from "mongoose"
const schema = mongoose.Schema;

const blogSchema = new schema({
    Title: {
      type: String,
      
      },
      sinpites: {
      type: String,
      
      },
	    photo: {
      type: String,
      
      },
      body: {
      type: String,
      
      },
	   isphoto: {
      type: Boolean,
      
      },
		   typenews: {
      type: String,
      
      },
	    author: {
      type: String,
      
      }
	
  },
       { timestamps:true });


export const  blog = mongoose.model('blogs',blogSchema);

