import React from 'react'


   const ToolCard = ({ img, title, exp, isSpinning }) => (
  <div className="bg-[#1e1e24] p-5 flex items-center gap-4 rounded hover:border hover:border-yellow-500 transition-all cursor-pointer">
    <img src={img} alt={title} className={`w-10 h-10 object-contain ${isSpinning ? "animate-spin" : ""}`} />
    <div>
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{exp}</p>
    </div>
  </div>
);
  


export default ToolCard