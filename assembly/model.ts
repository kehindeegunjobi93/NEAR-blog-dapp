import { Context, math, PersistentUnorderedMap } from "near-sdk-as";

export const blogs = new PersistentUnorderedMap<u32, Blog>("blogs");

@nearBindgen
export class PartialBlog {
    title: string;
    post: string;
    published: bool;
}

@nearBindgen
export class Blog {
    id: u32;
    title: string;
    post: string;
    published: bool;
    author: string;

    constructor(title: string, post: string){
        this.id = math.hash32<string>(title);
        this.title = title;
        this.post = post;
        this.published = true;
        this.author = Context.sender;
    }

    static insert(title: string, post: string): Blog {
        assert(is_valid_string(title), "Title must be a string");
        const blog = new Blog(title, post);
        blogs.set(blog.id, blog);
        return blog;
    }

    static findById(id: u32): Blog {
        assert(is_valid_number(id), "Id must be a string")
        return blogs.getSome(id);
    }

    static find(offset: u32, limit: u32): Blog[] {
        return blogs.values(offset, offset + limit);
    }

    static findByIdAndUpdate(id: u32, partial: PartialBlog): Blog {
        const blog = this.findById(id);

        blog.title = partial.title;
        blog.post = partial.post;

        blogs.set(id, blog);

        return blog;
    }

    static findByIdAndDelete(id: u32): void {
        blogs.delete(id);
    }
}

function is_valid_string(val: string): bool {
    return val.length >= 1;
}

function is_valid_number(val: u32): bool {
    return val >= 0;
}