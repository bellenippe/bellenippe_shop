import React from "react";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-noir-1 border-solid h-12 w-12"></div>
    </div>
  );
};
