import React from "react";

function HighlightItem() {
  const items = [1, 2, 3, 4];

  return (
    <div className="w-full px-6 md:px-16 py-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="h-[250px] bg-white border border-gray-300 rounded-2xl shadow-sm 
                     flex flex-col items-center justify-center gap-4 
                     transition-all duration-300 
                     hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]"
        >
          {/* Icon */}
          <div
            className="w-16 h-16 rounded-xl bg-blue-300 
                       animate-pulse 
                       transition-all duration-300"
          />

          {/* Title */}
          <p className="text-lg font-semibold text-gray-700 animate-fadeIn">
            Highlight {item}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HighlightItem;
                                                                                                                    