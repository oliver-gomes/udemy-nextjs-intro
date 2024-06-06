"use client";
import useSWR from "swr";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SinglePostPage = () => {
  const params = useParams();

  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/posts/${params.postid}`,
    fetcher
  );

  console.log("data", data);

  if (error) <>there was problems</>;
  if (isLoading) <>loading...</>;
  return <div>{data?.title && <div>{data?.title}</div>}</div>;
};

export default SinglePostPage;
