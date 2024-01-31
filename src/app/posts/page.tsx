import Card from "@/components/Card";
import getPostMetadata from "@/utils/getPostsMetadata";

export default function Posts() {
  const postsMetadata = getPostMetadata();
  const postPreviews = postsMetadata.map((post) => (
    <Card key={post.slug} data={post} />
  ));
  return (
    <section className="flex pt-[10rem] justify-between  ">
      <div className="flex flex-wrap justify-center gap-4">{postPreviews}</div>
    </section>
  );
}
