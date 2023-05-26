import React from "react";

const Welcome = () => {
  return (
    <div className="h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[80%]">
          <div className="mx-auto flex gap-4 justify-center items-center">
            <img src={mainLogo} className="w-[130px] h-[130px]" />
            <div>
              <h2 className="text-4xl">Welcome to</h2>
              <h1 className="font-heading text-6xl font-bold text-primary">
                Little Polymath
              </h1>
              <p className="text-2xl">FE Edition, Ver 1.0.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
