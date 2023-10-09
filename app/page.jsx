"use client";
import mitt from "next/dist/shared/lib/mitt";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandel = (e) => {
    e.preventDefault();

    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandeler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let taskList = <h1>No task Today's</h1>;
  const lisOfRendering = mainTask.map((e, i) => {
    return (
      <li key={i} className="flex items-center justify-center mb-5">
        <div className="flex justify-between items-center w-2/3">
          <h4 className="text-2xl font-semibold">{e.title}</h4>
          <h5 className="text-xl font-semibold">{e.desc}</h5>
        </div>
        <button
          onClick={() => {
            deleteHandeler(i);
          }}
          className="text-white bg-red-600 mx-10 font-bold rounded px-5 py4"
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <>
      <div>
        <h1 className="text-center bg-black font-bold text-5xl text-white p-5 ">
          My to do List
        </h1>

        <form onSubmit={submitHandel}>
          <input
            type="text"
            placeholder="Enter Title Task"
            className="border-zinc-800 text-2xl border-4 m-8 px-4 py-2 rounded"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter your Task"
            className="border-zinc-800 text-2xl border-4 m-8 px-4 py-2 rounded"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />

          <button
            type="submit"
            className="px-4 py-3 bg-black text-white text-1xl font-bold rounded"
          >
            Add task
          </button>
        </form>

        <div className="p-8 bg-slate-500">
          <ul>
            {/* {taskList} */}
            {lisOfRendering}
          </ul>
        </div>
      </div>
    </>
  );
};

export default page;
