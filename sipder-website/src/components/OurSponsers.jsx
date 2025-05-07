import React from "react";

function OurSponsers() {
  return (
    <div className="border-t p-4">
      <h2 className="text-2xl font-semibold">Sponsors</h2>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-0 text-white py-6 px-6 gap-10">
        <div className="w-100">
          <img src="../imgs/EA-Technology.png" />
        </div>
        <div className="w-100">
          <img src="../imgs/stevens-logo.png" />
        </div>
      </div>

      {/* <p className="text-gray-400 mt-2">{description}</p> */}
    </div>
  );
}

export default OurSponsers;
