import PostsSlugs from "@/components/PostsSlugs";
import StudentPresentation from "@/components/StudentPresentation";
import getPostMetadata from "@/utils/getPostsMetadata";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Image from "next/image";

const getPostContent = (slug: string) => {
  const file = `src/posts/${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({ slug: post.slug }));
};

export default function page({ params }: { params: { slug: string } }) {
  const post = getPostContent(params.slug);

  return (
    <div className="relative  flex  pt-[8rem] ">
      <div className=" nav-page w-[25vw]  ">
        <div className="sticky top-[10vh] border-r-2 border-gray-600 h-[90vh]   lg:px-[3rem]  left-0 bg-[--bg] overflow-auto">
          <h1 className="mb-4 text-4xl font-bold">Posts</h1>
          <PostsSlugs slug={params.slug} />
        </div>
      </div>
      <div className=" z-10 px-[0.5rem] lg:px-[2rem] ">
        <h1 className="text-4xl font-bold">{post.data.title}</h1>
        <div className=" flex flex-col gap-2 gap-y-4 p-4 rounded-md">
          <div className="relative h-[450px] w-full">
            <Image
              src={post.data.mainImg}
              fill
              alt={post.data.title}
              className="object-cover"
            />
          </div>

          <div className="flex gap-4 relative w-full justify-end">
            <div className="text-[var(--softTextColor)]">
              <span>Creado por: </span>
              <StudentPresentation name={post.data.createBy} />
            </div>
            <p className="text-[var(--softTextColor)]">{post.data.date}</p>
          </div>
        </div>
        <div>
          <article className="prose  lg:prose-xl text-[var(--text-color)]">
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
      </div>
    </div>
  );
}
