const page = ({ params }) => {
  const { id } = params;

  return (
    <div className="h-[641px] bg-[black] text-white">
      <ul>
        <li className="text-[#ffffff]">The page id is : {id}</li>
      </ul>
    </div>
  );
};

export default page;
