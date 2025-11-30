export default async function Page({ params }) {
  const { id } = await params;
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  console.log(posts);
  console.log({id});
  return (
    <div className=" h-[641px] bg-[black]">
      {posts.map((item) => (
          (item.id == id)?(
        <div className=" h-[400px] w-[300px] bg-[#ffffff]">
          <p>Product id : {item.id}</p>
          <p>Product name : {item.author}</p>
          <p>Product description : {item.category}</p>
          <p>Product Prise {item.id}</p>
        </div>           
      ):
      <p></p>
    )
    )}
    </div>
  );
}
