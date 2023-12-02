import getPostMetadata from "@/utils/getPostsMetadata";
import Card from "./Card";

export default function Posts() {
  const postsMetadata = getPostMetadata();
  const postPreviews = postsMetadata.map((post) => (
    <Card key={post.slug} data={post} />
  ));
  return (
    <section className="flex items-center justify-between ">
      <div className="flex items-center flex-wrap justify-evenly gap-6 post-container ">
        {postPreviews}
      </div>
    </section>
  );
}
