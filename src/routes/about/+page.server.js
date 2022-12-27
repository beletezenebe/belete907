
import {blog} from './db/model/blog.js';
import { json } from '@sveltejs/kit';
export async function load() {
   const b=await blog.find({});
   console.log(b)
    return {post:JSON.parse(JSON.stringify(b))}
   
  
  
}