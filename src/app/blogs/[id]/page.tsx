/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";

interface BlogData {
  title: string;
  content: string;
}

const Page = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const [data, setData] = useState<BlogData>();

  useEffect(() => {
    getData();
  }, [params]);

  const getData = async () => {
    const res = await fetch("/api/blogs/" + id);
    const json = await res.json();

    const parser = new DOMParser();
    const parsedContent = parser.parseFromString(json.content, "text/html");
    const cleanContent = parsedContent.body.innerHTML;

    setData({ ...json, content: cleanContent });
  };

  return (
    <div className="py-[120px]">
      <h1>{data?.title}</h1>
      <article
        className="froala-content"
        dangerouslySetInnerHTML={{ __html: data?.content || "" }}
      />
    </div>
  );
};

export default Page;
