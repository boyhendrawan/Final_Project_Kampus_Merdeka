import React from "react";

function LoadingRequest() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <span
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
      </span>
      <span className="mt-5">
          Loading...
        </span>
    </div>
  );
}

export default LoadingRequest;
