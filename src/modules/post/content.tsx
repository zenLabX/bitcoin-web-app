"use client";

import Post from "@/components/post";
import { useRouter, useParams } from "next/navigation";

const mockPost: Post = {
  id: "1",
  title: "Post 1",
  content: "Content 1",
  createdAt: 0,
};

const Content = () => {
  const router = useRouter();

  const { id } = useParams();
  console.log("id", id);

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="text-sm text-white font-bold"
      >
        {"← Back"}
      </button>
      <Post post={mockPost} />
    </div>
  );
};

export default Content;
