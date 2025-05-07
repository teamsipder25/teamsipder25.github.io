import React from "react";

const WhatWeDoSection = () => {
  return (
    <div className="flex flex-col items-center justify-between">
      <h1 className="text-3xl text-blue-400 font-bold py-4">WHAT WE DO</h1>

      <div className="flex flex-grid justify-between gap-4 grid grid-cols-1 md:grid-cols-2">
        <div className="card bg-base-300 w-96 rounded-2xl shadow-sm hover:shadow-blue-500 transition-shadow duration-300">
          <figure className="h-60 overflow-hidden">
            <img
              src="imgs\whatwedo\holderWithUTP2onArm.JPG"
              alt="Holder With Sensor on Arm"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Robust Sensor End-Effector Design
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <p>
              Holder is now able to securely hold the UTP2 while minimally obscuring the camera.
              Held by a bracket that allows space for electronic components.
            </p>

            {/* <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div> */}
          </div>
        </div>

        <div className="card bg-base-300 w-96 rounded-2xl shadow-sm hover:shadow-blue-500 transition-shadow duration-300">
          <figure className="h-60 overflow-hidden">
            <img
              src="imgs\whatwedo\inspection-clip_1.gif"
              alt="Inspection Screen Recording"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Data Collection
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <p>
              Gather inspection data from the UTP2 sensor and robotic arm, stored securely for
              analysis. Users can view a history of inspection data and can save current inspection
              readings.
            </p>

            {/* <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div> */}
          </div>
        </div>

        <div className="card bg-base-300 w-96 rounded-2xl shadow-sm hover:shadow-blue-500 transition-shadow duration-300">
          <figure className="h-60 overflow-hidden">
            <img
              src="imgs\whatwedo\arm.gif"
              alt="Arm Manipulation"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Arm Visual Servoing
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <p>
              Utilizes proportional velocity control to correct position in real-time. Reads April
              Tags for pose estimation.
            </p>

            {/* <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div> */}
          </div>
        </div>

        <div className="card bg-base-300 w-96 rounded-2xl shadow-sm hover:shadow-blue-500 transition-shadow duration-300">
          <figure className="h-60 overflow-hidden">
            <img
              src="imgs\whatwedo\torque-sensing.JPG"
              alt="Arm Manipulation"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Arm Torque Sensing
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <p>Arm's torque sensing determines when end-effector has made contact.</p>

            {/* <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;
