import React from "react";
import CatchAll from "../catch-all-segments.mdx";

function Home({ params }: { params: { slug: string[] } }) {
  return (
    <div className="p-12">
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl font-bold">Catch All Segments</h1>
        <div className="text-lg">
          http://domain/catch-all-segments/
          <span className="text-cyan-500">{params.slug.join("/")}</span>
        </div>
        <CatchAll />
        {/* <div className="bg-gray-800 rounded p-4">hi</div> */}
      </div>
    </div>
  );
}

export default Home;
