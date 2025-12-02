import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { id } = await params;
  let name = decodeURIComponent(id)
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  console.log(posts);
  console.log({id});
  return (
    <div className=" h-[641px] bg-[black]">
      {posts.map((item) => (
          (item.author == name)?(
        <div className=" h-[400px] w-[300px] bg-[#ffffff] grid gap-[-10px]">
          <p>Product id : {item.id}</p>
          <p>Product name : {item.author}</p>
          <p>Product category : {item.category}</p>
          <p>Product content : {item.content}</p>
          <p>Product description {item.catagory}</p>
          <p>Product date : {item.date}</p>
        </div>
      ):(
        notFound()
      )
    )
    )}
    </div>
  );
}
