import Link from "next/link";
import React from "react";

const page = () => {
  const route = [
    {
      id: 1,
      tittle: "Page 1",
      Description: "This id page 1 description",
    },
    {
      id: 2,
      tittle: "Page 2",
      Description: "This id page 2 description",
    },
  ];
  return (
    <div className=" h-[641px] bg-[black] text-white">
      <ul>
        {route.map((item) => (
          <li key={item.id}>
            <Link href={`/test/${item.id}`}>{item.tittle}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
