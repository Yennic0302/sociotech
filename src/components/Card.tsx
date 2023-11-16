import Link from "next/link";

interface DataFromPost {
  slug: string;
  title: string;
  description: string;
  createBy: string;
  date: string;
}
export default function Card({ data }: { data: DataFromPost }) {
  const { slug, title, description, createBy, date } = data;
  return (
    <div className="  card h-52 bg-[var(--softBg)] flex flex-col gap-2  p-4 rounded-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="h-14 text-[var(--softTextColor)]">{description}</p>
      <div className="flex gap-4 relative w-full justify-end">
        <p className="text-[var(--softTextColor)]">
          <span>Creado por: </span>
          {createBy}
        </p>
        <p className="text-[var(--softTextColor)]">{date}</p>
      </div>
      <Link
        className="font-bold text-2xl w-[4rem] text-1xl bg-[var(--main-color)] px-2 py-1 rounded-md text-center"
        href={`/posts/${slug}`}
      >
        Ver
      </Link>
    </div>
  );
}
