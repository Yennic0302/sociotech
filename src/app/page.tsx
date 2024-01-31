import MainPresentation from "@/components/MainPresentation";
import Posts from "@/components/Posts";

export default function Home() {
  return (
    <main>
      <MainPresentation />
      <div className=" px-20 max-md-[625px]:px-[1rem]">
        <h2 className="my-8  text-4xl font-bold">Algunos Posts</h2>
      </div>
      <Posts />
    </main>
  );
}
