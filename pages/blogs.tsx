import { NextPage } from "next";
import BlogCard from "../component/BlogCard";

interface Props {}

const Blogs: NextPage<Props> = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 space-y-5">
      <BlogCard
        title="This is my blog title"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore
      atque sequi veritatis corporis dolorum enim odio sunt praesentium
      molestias."
      />
      <BlogCard
        title="This is my blog title"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore
      atque sequi veritatis corporis dolorum enim odio sunt praesentium
      molestias."
      />
      <BlogCard
        title="This is my blog title"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore
      atque sequi veritatis corporis dolorum enim odio sunt praesentium
      molestias."
      />
    </div>
  );
};

export default Blogs;
