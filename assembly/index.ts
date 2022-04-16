import { Blog, PartialBlog } from './model'

export function create(title: string, post: string): Blog {
   return Blog.insert(title, post);
}

export function getById(id: u32): Blog {
  return Blog.findById(id)
}

export function get(offset: u32, limit: u32 = 10): Blog[] {
  return Blog.find(offset, limit);
}

export function update(id: u32, updates: PartialBlog): Blog {
  return Blog.findByIdAndUpdate(id, updates);
}

export function del(id: u32): void {
  Blog.findByIdAndDelete(id);
}