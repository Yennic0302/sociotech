import Image from "next/image";
import StudentPresentation from "./StudentPresentation";

export default function Footer() {
  return (
    <div className="mt-10  text-center p-6 flex flex-col lg:flex-row justify-center items-center text-lg bg-black gap-6">
      <div className="flex-1">
        <div className="flex flex-col gap-2 ">
          <h2 className="text-[var(--main-color)] underline text-xl mb-2">
            Creado Por:
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <StudentPresentation name="yender" />
            <StudentPresentation name="mario" />
            <StudentPresentation name="alfonzo" />
            <StudentPresentation name="jesus" />
            <StudentPresentation name="santiago" />
          </div>
        </div>
      </div>
      <div className="flex-1 flex-col  gap-y-4">
        <div className="flex flex-col items-center gap-y-2">
          <h2 className="text-[var(--main-color)] underline text-xl mb-2">
            Para:
          </h2>
          <Image
            src="/unexca.png"
            alt="logo universidad"
            width={100}
            height={100}
          />
          <h3>Universidad Nacional Experimental de la Gran Caracas (UNEXCA)</h3>
        </div>
        <span>
          Profesor:{" "}
          <a
            href="https://sociocriticaunexca2020.wordpress.com/"
            target="_blank"
            rel="noreferrer"
            className="text-[--main-color] underline cursor-pointer"
          >
            Rafael Camacho
          </a>
        </span>
      </div>
    </div>
  );
}
