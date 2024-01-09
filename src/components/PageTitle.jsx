import React from "react";

export default function PageTitle({title}) {
  return (
    <span className="before:block before:absolute before:top-0 before:bottom-0 before:-right-1 before:inset-2 before:-skew-x-12 before:bg-red-700 relative py-3 px-6 md:py-4 md:px-10">
      <h1 class="inline-block text-2xl md:text-3xl text-white font-mehr relative">
        {title}
      </h1>
    </span>
  );
}
