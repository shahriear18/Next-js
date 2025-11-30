import Link from "next/link";
import React from "react";

const page = async() => {
    const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  // const route = [
  //   {
  //     id: 1,
  //     tittle: "Page 1",
  //     Description: "This id page 1 description",
  //   },
  //   {
  //     id: 2,
  //     tittle: "Page 2",
  //     Description: "This id page 2 description",
  //   },
  // ];
  return (
    <div className=" h-[641px] bg-[black] text-white">
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            <Link href={`/test/${item.id}`}>item = {item.author}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
