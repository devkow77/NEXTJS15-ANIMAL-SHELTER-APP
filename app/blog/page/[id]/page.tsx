import React from "react";
import { BeforeWeStart, GridBlog, Header } from "@/components/sections/blog";

interface Props {
  params: {
    id: string;
  };
}

const Blog = async ({ params }: Props) => {
  const { id } = await params;

  return (
    <div className="space-y-16 md:space-y-32">
      <Header />
      <BeforeWeStart />
      <GridBlog pageId={id} />
    </div>
  );
};

export default Blog;
