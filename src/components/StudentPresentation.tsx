import Image from "next/image";

const studenstData = {
  yender: {
    name: "Yender Rodriguez",
    photo: "/imagenEstudiantes/yender.png",
  },
  santiago: {
    name: "Santiago Griman",
    photo: "/imagenEstudiantes/santiago.png",
  },
  jesus: {
    name: "Jesus Tovar",
    photo: "/imagenEstudiantes/jesus.png",
  },
  mario: {
    name: "Mario Olivo",
    photo: "/imagenEstudiantes/mario.png",
  },
  alfonzo: {
    name: "Alfonzo Guerreiro",
    photo: "/imagenEstudiantes/alfonzo.png",
  },
};

export default function StudentPresentation({
  name,
}: {
  name: "yender" | "santiago" | "jesus" | "mario" | "alfonzo";
}) {
  return (
    <div className="flex justify-center items-center gap-x-2 ">
      <Image
        width={50}
        height={50}
        className="rounded-full"
        src={studenstData[name].photo}
        alt="avatar del estudiante"
      />
      <h2>{studenstData[name].name}</h2>
    </div>
  );
}
