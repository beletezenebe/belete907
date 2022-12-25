import {blog} from './db/model/blog';
 
export async function load() {
  console.log(blog.find())
  const datas = blog.find()
  return {
    post:datas
  };
}