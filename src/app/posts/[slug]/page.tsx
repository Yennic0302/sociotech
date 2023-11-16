import getPostMetadata from "@/utils/getPostsMetadata";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Link from "next/link";

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
  const posts = getPostMetadata();
  return (
    <div className=" flex px-20 overflow-hidden h-screen pt-[8rem] z-50">
      <div className="flex-[1] border-r-2 border-gray-600 overflow-auto">
        <h1 className="mb-4 text-4xl font-bold">Posts</h1>
        <nav className="p-6 flex flex-col gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              className={` text-2xl ${
                params.slug === post.slug
                  ? "text-[var(--main-color)]"
                  : "text-[var(--text-color)]"
              }`}
              href={post.slug}
            >
              {post.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex-[3] px-6 overflow-auto">
        <h1 className="text-4xl font-bold">{post.data.title}</h1>
        <div>
          <p></p>
          <p></p>
        </div>
        <div>
          <article className="prose lg:prose-xl text-[var(--text-color)]">
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
      </div>
    </div>
  );
}
