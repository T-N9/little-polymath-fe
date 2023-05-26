import React, { useEffect, useState } from "react";

import { fetchQuizItems } from "../../contentful";
/* Components */
import QuizItem from "../common/QuizItem";

const Home = () => {
  const [quizData, setQuizData] = useState();

  useEffect(() => {
    const quizItemsPromise = fetchQuizItems();

    quizItemsPromise
      .then((quizItems) => {
        // Access the quizItems array and process/store the data as needed
        console.log(quizItems); // Example: Log the array to the console
        setQuizData(quizItems);

      })
      .catch((error) => {
        // Handle error
      });
  }, []);

  console.log({ quizData });

  return (
    <div className="">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[70%] flex flex-col gap-5">
          {quizData?.map((item, index) => {
            const qNumber = index+1;
            console.log({qNumber})
            return <QuizItem key={index} content={item} qNumber={qNumber} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
