import getPostMetadata from "@/utils/getPostsMetadata";
import Card from "./Card";

export default function Posts() {
  const postsMetadata = getPostMetadata();
  const postPreviews = postsMetadata
    .slice(0, 6)
    .map((post) => <Card key={post.slug} data={post} />);
  return (
    <section className="flex items-center justify-between ">
      <div className="flex items-center flex-wrap  justify-center">
        {postPreviews}
      </div>
    </section>
  );
}
