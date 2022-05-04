import {FaFilter} from "react-icons/fa"
import React from "react";

const Filter = (props) => {
  return (
    <div
      onClick={props.OnFilter}
      className={`px-5 py-2 cursor-pointer text-stone-400 rounded-md border border-stone-400 float-right mx-6 flex justify-between
       gap-6 items-center hover:text-white hover:bg-stone-400 transition-colors duration-200`}
    >
      فیلتر
      <FaFilter />

    </div>
  );
};


export default Filter;
