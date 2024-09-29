import React from "react";
import DynamicSegment from "./dynamic-segment.mdx";

function BlogRoll() {
  return (
    <div className="p-12">
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl font-bold">Dynamic Segments</h1>
        <DynamicSegment />
      </div>
    </div>
  );
}

export default BlogRoll;
