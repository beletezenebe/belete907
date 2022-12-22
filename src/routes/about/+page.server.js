import {blog} from './db/model/blog';
 
/** @type {import('./$types').PageServerLoad} */
export async function load() {
  console.log(blog.find())
  const datas = blog.find()
  return {
    post:datas
  };
}