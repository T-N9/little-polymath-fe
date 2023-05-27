import React from "react";

/* data */
import { examYears } from "../../data/common";

/* Hook */
import Hook from "./hook";

const ByYears = () => {
  const { isSpring, setIsSpring } = Hook();
  return (
    <div className="bg-base-200 min-h-screen pt-5 flex justify-center items-center">
      <div className="max-w-3xl mx-auto">
        <div className="flex gap-5">
          <div>
            <h1 className="text-center mb-4">Choose a year:</h1>
            <div>
              <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-1 flex-grow p-5 card bg-base-300 shadow-md pb-8 rounded-box place-items-center w-[500px]">
                  <div className="flex flex-wrap gap-4 justify-evenly items-center">
                    {examYears.map((item) => {
                      return (
                        <button key={item} className="btn btn-sm">
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-center mb-4">Choose season:</h1>
            <div>
              <div className="flex flex-col justify-center w-full lg:flex-row">
                <div className="">
                  <div className="flex flex-wrap gap-4 justify-evenly items-center">
                    <label className="swap swap-flip text-4xl text-center">
                      <input
                        onChange={() => setIsSpring((prev) => !prev)}
                        type="checkbox"
                      />
                      <div className="swap-on">🍃</div>
                      <div className="swap-off">🍂</div>

                      <p className="text-base font-bold mt-10">{isSpring ? 'Spring' : 'Autumn'}</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ByYears;
