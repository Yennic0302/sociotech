import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex bg-black fixed w-full z-50 text-xl items-center justify-between h-[10vh]">
      <ul className="flex items-center justify-between w-full px-20">
        <li className="cursor-pointer">
          <Link href="/">
            SOCIO <span className="text-[var(--main-color)]">TECH</span>
          </Link>
        </li>
        <ol className="flex items-center justify-between gap-10">
          <Link href="/posts" className="hover:text-[var(--main-color)]">
            Posts
          </Link>
          <Link href="/about" className="hover:text-[var(--main-color)]">
            Sobre Socio Tech
          </Link>
        </ol>
      </ul>
    </nav>
  );
}
