import React from "react";

const Home = () => {
  return (
    <div className="hero py-14 min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6 w-[70%] mx-auto text-sm">
            Welcome to Little Polymath, where you can put your knowledge to the
            test and take your skills to new heights. Prepare yourself for the
            upcoming FE exam and beyond by choosing from our selection of
            engaging quiz modes. Challenge yourself, learn, and excel in the
            exciting field of technology.
          </p>

          <h1 className="text-center mb-4">Choose a mode:</h1>

          <div className="flex flex-col w-full border-opacity-50">
            <div className="flex flex-col w-full lg:flex-row">
              <a
                className="grid btn flex-1 flex-grow h-32 card rounded-box place-items-center"
                href="/by-chapters"
              >
                <div>
                  <h1 className="text-xl font-bold text-primary">
                    By Chapters
                  </h1>
                </div>
              </a>
              <div className="divider lg:divider-horizontal">OR</div>
              <a
                className="grid btn flex-1 flex-grow h-32 card rounded-box place-items-center"
                href="/by-years"
              >
                <div>
                  <h1 className="text-xl font-bold text-primary">By Years</h1>
                </div>
              </a>
            </div>
            <div className="divider">OR</div>
            <div className="grid btn h-20 card rounded-box place-items-center">
              <h1 className="text-xl font-bold text-primary">
                Randomized Mock Up
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
