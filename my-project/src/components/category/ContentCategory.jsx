import React from "react";

export default function ContentCategory({ data }) {
  return (
    <>
      {Object.values(data).map((elem) => {
        return elem.map((element) => {
          return (
            <div key={element.id} className="flex flex-col gap-10 bg-white p-10 lg:w-[23.4%] md:w-[40%] w-[84%] min-h-[35rem] justify-evenly rounded-3xl">
              <img src={element.img} alt="pic" className="h-72 object-cover rounded-3xl"/>
              <h4>{element.name}</h4>
              <span>{element.price} تومان</span>
            </div>
          );
        });
      })}
    </>
  );
}
