"use client";
import Post from "@/components/post";
import useQueryPost from "@/hooks/use-query-post";
import { useRouter, useParams } from "next/navigation";

const Content = () => {
  const router = useRouter();
  const { data, isLoading, error } = useQueryPost();

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="text-sm text-white font-bold"
      >
        {"← Back"}
      </button>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <Post post={data} />
    </div>
  );
};

export default Content;
