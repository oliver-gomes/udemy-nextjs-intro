import React from "react";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://dummyjson.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const PostsPage = async ({ searchParams }) => {
  const data = await getData();

  return (
    <div>
      {data.posts.map((post, id) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
