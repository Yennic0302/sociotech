import Image from "next/image";
import Link from "next/link";
import StudentPresentation from "./StudentPresentation";

interface DataFromPost {
  slug: string;
  title: string;
  description: string;
  createBy: "yender" | "santiago" | "jesus" | "mario" | "alfonzo";
  date: string;
  mainImg: string;
}
export default function Card({ data }: { data: DataFromPost }) {
  const { slug, title, description, createBy, date, mainImg } = data;
  return (
    <Link
      href={`/posts/${slug}`}
      className=" w-full lg:max-w-[45%]  card shrink"
    >
      <div className="  bg-[var(--softBg)] flex flex-col gap-2 gap-y-4 p-4 rounded-md">
        <h2 className="text-xl lg:text-4xl font-bold">{title}</h2>
        <div className="relative h-[300px] w-full">
          <Image src={mainImg} fill alt={title} className="object-cover" />
        </div>
        <p className="h-14 text-[var(--softTextColor)]  text-ellipsis overflow-hidden">
          {description}
        </p>
        <div className="flex gap-4 relative w-full justify-end">
          <div className="text-[var(--softTextColor)]">
            <span>Creado por: </span>
            <StudentPresentation name={createBy} />
          </div>
          <p className="text-[var(--softTextColor)]">{date}</p>
        </div>
      </div>
    </Link>
  );
}
