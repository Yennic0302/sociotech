import getPostMetadata from "@/utils/getPostsMetadata";
import Link from "next/link";

export default function PostsSlugs({ slug }: { slug: string }) {
  const posts = getPostMetadata();

  return (
    <nav className="nav-page p-6 flex flex-col gap-6">
      {posts.map((post) => (
        <Link
          key={post.slug}
          className={` text-2xl ${
            slug === post.slug
              ? "text-[var(--main-color)]"
              : "text-[var(--text-color)]"
          }`}
          href={post.slug}
        >
          {post.title}
        </Link>
      ))}
    </nav>
  );
}
