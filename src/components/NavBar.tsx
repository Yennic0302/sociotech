import getPostMetadata from "@/utils/getPostsMetadata";
import Link from "next/link";
import InteractiveMenu from "./InteractiveMenu";
import "./NavBar.css";

export default function NavBar() {
  const posts = getPostMetadata();
  return (
    <nav className="flex bg-black fixed w-full z-50 text-xl items-center justify-between h-[10vh]">
      <ul className="flex items-center justify-between w-full nav-var-container">
        <li className="cursor-pointer">
          <Link href="/">
            SOCIO <span className="text-[var(--main-color)]">TECH</span>
          </Link>
        </li>
        <ol className="options flex items-center justify-between gap-10">
          <Link href="/posts" className="hover:text-[var(--main-color)]">
            Posts
          </Link>
          <Link href="/about" className="hover:text-[var(--main-color)]">
            Sobre Socio Tech
          </Link>
        </ol>
      </ul>
      <InteractiveMenu posts={posts} />
    </nav>
  );
}
