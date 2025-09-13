"use client";

import Link from "next/link";
import Post from "@/components/post";
import Pagination from "@/modules/home/pagination";
import useQueryPostList from "@/hooks/use-query-post-list";

const PostList = () => {
  const { data, isLoading, error } = useQueryPostList();
  const { posts = [], totalPages } = data || {};

  return (
    <div className="mt-8">
      {/* loading 處理 */}
      {isLoading && <div>Loading...</div>}

      {/* 錯誤處理 */}
      {error && <div>Error: {error.message}</div>}

      {/* 查無資料 */}
      {!isLoading && posts.length === 0 && <div>No posts found.</div>}

      {!isLoading &&
        posts.map((post: Post) => (
          <Link key={post.id} href={`/post/${post.id}`}>
            <Post post={post} />
          </Link>
        ))}
      <div className="mt-8">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default PostList;
