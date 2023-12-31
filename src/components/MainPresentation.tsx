import Image from "next/image";

export default function MainPresentation() {
  return (
    <div className="relative h-screen m-auto flex flex-col ">
      <div className="absolute h-full w-full flex justify-center items-center">
        <div className=" absolute   presentationTitle  text-white z-40 flex flex-col gap-6">
          <h1>Bienvenido a</h1>
          <h1>
            SOCIO
            <span className="text-[var(--main-color)]"> TECH</span>
          </h1>
        </div>
      </div>
      <div className="relative h-full opacity-40">
        <Image alt="main image" src="/background.svg" fill />
      </div>
    </div>
  );
}
