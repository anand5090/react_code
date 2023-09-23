import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("Olive");
  return (
    <div className="w-full h-screen duration-100" style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center inset-x-0 ">
        <div className="w-full flex flex-wrap justify-between gap-3 shadow-lg bg-indigo-400 px-3 py-2">
          <div className=" bg-green-700 rounded-full px-4 py-1">
          <h1>Bg Changer</h1>
          </div>
          <div>
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 m-2 rounded-full text-white shadow-lg"
            style={{ background: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 m-2 rounded-full text-white shadow-lg"
            style={{ background: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 m-2 rounded-full text-white shadow-lg"
            style={{ background: "olive" }}
          >
            Olive
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 m-2 rounded-full text-white shadow-lg"
            style={{ background: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1  m-2 rounded-full text-white shadow-lg"
            style={{ background: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("grey")}
            className="outline-none px-4 py-1 m-2 rounded-full text-white shadow-lg"
            style={{ background: "grey" }}
          >
            Grey
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 m-2 rounded-full text-white shadow-lg"
            style={{ background: "pink" }}
          >
            Pink
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
