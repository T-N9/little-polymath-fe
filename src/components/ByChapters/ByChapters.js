import React from "react";

/* data */
import { technologyChapters, strategyChapters } from "../../data/common";

const ByChapters = () => {
  return (
    <div className="bg-base-200 min-h-screen pt-5 flex justify-center items-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-center mb-4">Choose a chapter:</h1>
        <div>
          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-1 flex-grow p-5 card bg-base-300 shadow-md pb-8 rounded-box place-items-center">
              <h1 className="text-primary text-xl font-bold mb-5">Fundamentals</h1>

              <div className="flex flex-col gap-2">
                  {technologyChapters.map((item, index) => {
                    return (
                      <button key={index} className="btn btn-sm">
                        {index+1}. {item}
                      </button>
                    );
                  })}
              </div>
            </div>
            <div className="divider lg:divider-horizontal">OR</div>
            <div className="grid flex-1 flex-grow p-5 card bg-base-300 shadow-md pb-8 rounded-box place-items-center">
              <h1 className="text-primary text-xl font-bold mb-5">Strategy & Management</h1>
              <div className="flex flex-col gap-2">
                  {strategyChapters.map((item, index) => {
                    return (
                      <button key={index} className="btn btn-sm">
                        {index+1}. {item}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ByChapters;
