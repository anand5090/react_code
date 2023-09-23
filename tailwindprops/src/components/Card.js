import React from "react";

function Card({username,btnText="Click me",Img}) {
   
  return (
    <>
      <div className="max-w-md mx-auto mt-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48 place-content-center"
              src={Img}
              alt="Building images"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Company retreats {username}
            </div>
            <a
              href="/#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p className="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
            <button className="rounded-md bg-green-400 m-3 p-2">{btnText}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
