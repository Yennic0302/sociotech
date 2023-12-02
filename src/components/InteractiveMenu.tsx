"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./NavBar.css";

export default function InteractiveMenu({ posts }: { posts: metadataPost[] }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [slug, setSlug] = useState<string>("");
  const [isInPosts, setIsInPosts] = useState<boolean>(false);

  useEffect(() => {
    const path = window.location.pathname.split("/");
    if (path[0] == "posts") {
      setIsInPosts(true);
    } else {
      setIsInPosts(false);
    }
  }, [slug]);

  return (
    <>
      <li className="menu-btn mx-[2rem]" onClick={() => setIsOpen(!isOpen)}>
        menu
      </li>
      {isOpen && (
        <ul className="interactive-menu flex flex-col justify-center items-center">
          <nav className="p-6 flex flex-col gap-6">
            <Link
              href="/about"
              className="hover:text-[var(--main-color)] text-2xl "
              onClick={() => setIsOpen(false)}
            >
              Sobre Socio Tech
            </Link>
            {posts.map((post) => (
              <Link
                key={post.slug}
                className={` text-2xl ${
                  slug === post.slug
                    ? "text-[var(--main-color)]"
                    : "text-[var(--text-color)]"
                }`}
                href={isInPosts ? `/${post.slug}` : `/posts/${post.slug}`}
                onClick={() => {
                  setIsOpen(false);
                  setIsOpen(false);
                  setSlug(post.slug);
                }}
              >
                {post.title}
              </Link>
            ))}
          </nav>
        </ul>
      )}
    </>
  );
}
