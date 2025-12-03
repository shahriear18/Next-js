import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { id } = await params;
  const name = decodeURIComponent(id);

  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();

  // Find the matched post
  const matchedPost = posts.find((item) => item.author === name);

  if (!matchedPost) {
    notFound(); // No match → show 404 page
  }

  return (
    <div className="h-[641px] bg-black text-white flex justify-center items-center">
      <div className="h-[400px] w-[300px] bg-white text-black p-4 rounded-lg">
        <p>Product id : {matchedPost.id}</p>
        <p>Product name : {matchedPost.author}</p>
        <p>Product category : {matchedPost.category}</p>
        <p>Product content : {matchedPost.content}</p>
        <p>Product date : {matchedPost.date}</p>
      </div>
    </div>
  );
}
