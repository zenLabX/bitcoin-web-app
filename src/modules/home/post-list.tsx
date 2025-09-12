"use client";

import Link from "next/link";
import Post from "@/components/post";
import Pagination from "@/modules/home/pagination";

const mockPosts: Post[] = [
  {
    id: "1",
    title: "Post 1",
    content: "Content 1",
    createdAt: 0,
  },
];

const PostList = () => {
  return (
    <div className="mt-8">
      {mockPosts.map((post: Post) => (
        <Link key={post.id} href={`/post/${post.id}`}>
          <Post post={post} />
        </Link>
      ))}
      <div className="mt-8">
        <Pagination totalPages={1} />
      </div>
    </div>
  );
};

export default PostList;
