import PostsSlugs from "@/components/PostsSlugs";
import getPostMetadata from "@/utils/getPostsMetadata";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

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
    <div className="relative post-container flex  pt-[8rem] ">
      <div className=" nav-page w-[25vw]  ">
        <div className="fixed top-[10vh] border-r-2 border-gray-600anime w-[30vw] px-[3rem] pt-12 left-0 bg-[--bg] h-[90vh] overflow-auto">
          <h1 className="mb-4 text-4xl font-bold">Posts</h1>
          <PostsSlugs slug={params.slug} />
        </div>
      </div>
      <div className=" z-10 px-[2rem] ">
        <h1 className="text-4xl font-bold">{post.data.title}</h1>
        <div>
          <article className="prose  lg:prose-xl text-[var(--text-color)]">
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
      </div>
    </div>
  );
}
