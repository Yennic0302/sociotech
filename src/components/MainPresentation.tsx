import Arrow from "@/icons/Arrow";
import Image from "next/image";

export default function MainPresentation() {
  return (
    <div className="relative h-screen m-auto flex flex-col ">
      <div className="absolute h-full w-full flex justify-center items-center">
        <div className=" absolute text-5xl lg:text-8xl    text-white z-40 flex flex-col gap-6 px-2">
          <h1>Bienvenido a</h1>
          <h1>
            SOCIO
            <span className="text-[var(--main-color)]"> TECH</span>
          </h1>
        </div>
      </div>
      <div className="relative h-full opacity-40 ">
        <Image alt="main image" src="/background.svg" fill />
      </div>
      <Arrow style="h-20 w-20 absolute bottom-[5vh] left-[40%] sm:left-[45%] lg:left-[47%] arrow-animation" />
    </div>
  );
}
