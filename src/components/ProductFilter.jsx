import React, { useState, useEffect } from "react";
// const Magnet = lazy(()=>import('../components/Magnet'));
import Magnet from'../components/Magnet';

const categories = [
  "All",
  "Kitbag",
  "Ball",
  "Bat",
  "Helmet",
  "Stump",
  "Gloves",
  "Pad",
  "Shoes",
];

const FilterProduct = ({ onFilter }) => {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    onFilter(category, search);
  }, [category, search]);

  return (
    <div className="bg-gray-100 p-4 mb-6 rounded-lg shadow flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Search */}
      <input
        type="text"
        placeholder="Search product here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-[40vw] px-4 py-2 border-b border-gray-600  outline-0"
      />

      {/*  button category*/}
      <div className="flex gap-2 flex-wrap  justify-center">
        {categories.map((cat) => (
          <Magnet key={cat} padding={50} disabled={false} magnetStrength={20}>
           <button
             onClick={() => setCategory(cat)}
             className={`px-4 py-1 rounded-lg border text-sm font-semibold ${
               category === cat
                 ? "bg-sky-600 text-zinc-100"
                 : "bg-white text-gray-700 hover:bg-blue-300"
             }`}
           >
             {cat}
           </button>
          </Magnet>
        ))}
      </div>
    </div>
  );
};

export default FilterProduct;
