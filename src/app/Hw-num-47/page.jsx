import React from "react";

const page = () => {
  let shoes = [
    {
      img: "shoe1.jpg",
      name: "Jordern 4 White Thunder",
      info: "Step back in time with the iconic Jordan 4 Retro White Thunder, a timeless basketball shoe that combines style and performance.",
      price: "90.0",
    },
    {
      img: "shoe2.jpg",
      name: "Jordan Retro 12 Grade",
      info: "If you want this art concept with a different Biggie image or any other musician or person, feel free to contact to get the creative.",
      price: "99.0",
    },
    {
      img: "shoes3.jpeg",
      name: "Air Jordan Retro Military",
      info: "Whether you're hitting the court or rocking an everyday streetwear look, the Air Jordan 4 White Thunder will elevate your style",
      price: "120",
    },
    {
      img: "shoes4.jpg",
      name: "Jordern 10 Rettro ground",
      info: "Step back in time with the iconic Jordan 4 Retro White Thunder, a timeless basketball shoe that combines style and performance.",
      price: "70.0",
    },
    {
      img: "shoes5.jpg",
      name: "Ar jordern custom 15TC",
      info: "Supplied by a premier sneaker marketplace dealing with demand rarities. Each product is rigorously inspected by experienced",
      price: "80.0",
    },
  ];
  let product = [
    {
      img: "make1.png",
      name: "A Vibrant Red Lipstick",
      info: "quotes and captions about red lipstick, fonts that mimic lipstick, or images of text written with lipstick, often used for.",
      price: "$90.0",
      color : "7700ff",
      bgcolor : "9d4bfa",
    },
    {
      img: "make2.png",
      name: "Elegant Perfume Bottle",
      info: "A luxurious red perfume bottle with a sleek, cylindrical design. The glass body features vertical ridges that give it an.",
      price: "$120.0",
      color : "59ff00",
      bgcolor : "b4ff8c",
    },
    {
      img: "make3.png",
      name: "A sleek cosmetic bottle",
      info: "A sleek, modern cosmetic bottle with a frosted light blue body and a glossy matching cap. The design is accented",
      price: "$60.0",
      color : "ff0000",
      bgcolor : "ff4d4d",
    },
    {
      img: "make4.png",
      name: "A red pump bottle,",
      info: "Anayase is a prominent online cosmetics shop in Bangladesh offering a range of beauty products, skincare and makeup.",
      price: "$99.0",
      color : "ff00d4",
      bgcolor : "fa6be2",
    },
    {
      img: "make5.png",
      name: "Stylish Perfume Bottle",
      info: "This high quality and versatile heavy based glass bottle and atomiser combination makes it an ideal choice.",
      price: "$90.0",
      color : "ff6200",
      bgcolor : "f58b49",
    },
  ];
  let figurs = [
    {
      img: "itachi.jpg",
      name: "Itachi Uchia",
      info: "AUGEN Itachi Uchiha 7 Action Figure Limited Edition for Car Dashboard, Decoration, Cake, Office Desk & Study Table (21cm)(Pack of 1)",
      price: "$70",
      color : "04ff00",
    },
    {
      img: "sasuke.jpg",
      name: "Sasuke Uchia",
      info: "AUGEN Sasuke Uchiha 7 Action Figure Limited Edition for Car Dashboard, Office Desk & Study Table (21cm)(Pack of 1)",
      price: "$62",
      color : "ff8000",
    },
    {
      img: "zoro.jpg",
      name: "Roronoa Zoro",
      info: "Tinion||ONE Piece- Roronoa Zoro- HIGH Detailed -Action Figure Miniature Toy Figure (Doll) Special Edition for Car Dashboard.",
      price: "$90",
      color : "7300ff",
    },
    {
      img: "eren.jpg",
      name: "Eren Yagar",
      info: "FUNFOB Attact On Titan Eren Yeager Action Figure Height -17cm Collectible for Anime Fans PVC Multicolour | Eren Yeager Beast.",
      price: "$70",
      color : "ff0000",
    },
    {
      img: "zenitsu.jpeg",
      name: "Zenitsu Agatsuma",
      info: "RVM Toys Demon Zenitsu Slayer Action Figure 15 cm Collectible for Office Desk & Study Table, Car Dashboard, Decoration.",
      price: "$62",
      color : "f700ff",
    },
  ];
  return (
    <div>
      <div className=" bg-[]">
        <div className=" flex">
          {shoes.map((item) => (
            <div className="h-[410px] w-[250px] border-1 ml-[20px] mt-[20px] rounded-[10px] ">
              <img
                src={item.img}
                alt=""
                className="mt-[10px] absolute h-[200px] flex justify-center p-[20px]"
              />
              <img
                src="/jordern logo.jpg"
                alt=""
                className="h-[40px] mt-[10px] ml-[10px] absolute"
              />
              <i className="fa-solid fa-shop text-[22px] ml-[215px] mt-[15px] absolute "></i>
              <h2 className="mt-[210px] absolute ml-[10px] font-[700] text-[18px]">
                {item.name}
              </h2>
              <p className="text-[11px] font-[700] mt-[240px] ml-[10px] absolute w-[240px]">
                {item.info}
              </p>
              <ul className="flex gap-[2px] mt-[295px] ml-[10px]">
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
                <li>
                  <i class="fa-solid fa-star"></i>
                </li>
                <li></li>
              </ul>
              <ul className="font-[700] flex gap-[10px] mt-[8px] ml-[10px]">
                <li className="mt-[-2px]">Color :-</li>
                <li className="h-[20px] w-[20px] rounded-full bg-[#adaca8]"></li>
                <li className="h-[20px] w-[20px] rounded-full bg-black"></li>
                <li className="h-[20px] w-[20px] rounded-full bg-[red]"></li>
              </ul>
              <h3 className="font-[800] text-[23px] absolute ml-[180px] mt-[-30px] text-[#737270]">
                ${item.price}
              </h3>
              <button className="h-[35px] w-[200px] bg-[#6e02fa] rounded-[20px] mt-[15px] ml-[20px] text-white font-[700]">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div className=" flex">
          {product.map((item) => (
            <div className="h-[415px] w-[250px] border-[1px] ml-[20px] mt-[20px] rounded-[10px] overflow-hidden">
              <div style={{ backgroundColor: `#${item.bgcolor}` }} className="h-[150px] bg-[#] "></div>
              <div style={{ backgroundColor: `#${item.color}` }} className="h-[200px] w-[180px] bg-[#] absolute mt-[-150px] ml-[35px] rounded-b-full">
                <img
                  src={item.img}
                  alt=""
                  className="h-[200px] mt-[40px] rotate-[15deg]"
                />
                <p style={{ backgroundColor: `#${item.color}` }} className="pl-[30px]  text-[white] text-[30px] ml-[-35px] w-[180px] rounded-r-[60px] font-[600]">
                  {item.price}
                </p>
                <p className="font-[900] text-[16px] ml-[-5px] mt-[5px]">
                  {item.name}
                </p>
                <p className="text-[11px] font-[700] w-[220px] ml-[-5px]">
                  {item.info}
                </p>
                <button style={{ backgroundColor: `#${item.color}` }} className="bg-[#] text-[13px] font-[600] py-[5px] px-[30px] rounded-[20px] mt-[15px] ml-[30px]">
                  Buy now
                </button>
                <p className=" font-[700] absolute top-[40px] py-[5px] bg-white px-[35px] rounded-r-[10px] left-[-35px]">
                  New
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex">
            {
        figurs.map((item) =>(
        <div className="h-[400px] w-[250px] border-[1px] mt-[20px] ml-[20px] rounded-[10px] overflow-hidden">
          <div  style={{ backgroundColor: `#${item.color}` }} className="h-[240px] w-[400px] bg-[#] rotate-[-20deg] ml-[-120px] mt-[-40px]"></div>
          <div className="h-[170px] w-[170px] rounded-[100px] bg-amber-800 absolute mt-[-120px] ml-[35px] overflow-hidden">
            <img src={item.img} alt="" />
          </div>
          <h2 className=" absolute font-[900] ml-[10px] mt-[-190px] text-[18px] ">
            {item.name}
          </h2>
          <p className=" absolute font-[700] text-[11px] w-[235px] ml-[10px] mt-[70px] text-[#3d3d3c]">
            {item.info}
          </p>
          <div className="h-[60px] w-[60px] rounded-[50px] bg-[white] absolute mt-[-190px] ml-[180px] font-[800] text-[25px] flex items-center justify-center">
            {item.price}
          </div>
          <button  style={{ backgroundColor: `#${item.color}` }} className="py-[3px] px-[40px] absolute bg-[#] rounded-[30px] text-[13px] font-[700] mt-[150px] ml-[55px]">
            Buy Now
          </button>
          <div className="h-[35px] w-[35px] border-[2px] rounded-[100px] mt-[145px] ml-[10px] flex items-center justify-center">
            <i class="fa-solid fa-heart text-[red]"></i>
          </div>
          <div className="h-[35px] w-[35px] border-[2px] rounded-[100px] mt-[-36px] ml-[200px] flex items-center justify-center">
            <i class="fa-solid fa-shop text-[blue]"></i>
          </div>
        </div>                    
                ))
            }
        </div>

      </div>
    </div>
  );
};

export default page;
