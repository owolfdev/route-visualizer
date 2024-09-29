import React from "react";
import CatchAll from "./catch-all-segments.mdx";

function Home() {
  return (
    <div className="p-12">
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl font-bold">Catch All Segments</h1>
        <div className="text-lg">http://domain/catch-all-segments/</div>
        <CatchAll />
      </div>
    </div>
  );
}

export default Home;
