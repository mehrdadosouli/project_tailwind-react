import React from "react";

export default function ContentCategory({ data }) {
  return (
    <>
      {Object.values(data).map((elem) => {
        return elem.map((element) => {
          return (
            <div key={element.id} className="flex flex-col gap-10 bg-white w-[25%] min-h-[35rem] justify-evenly p-10 rounded-3xl">
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
