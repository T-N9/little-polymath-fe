import React, { useState, useEffect } from "react";

import { fetchQuizItems } from "../../contentful";

const Index = () => {
  const [totalMark, setTotalMark] = useState(0);
  const [quizData, setQuizData] = useState();
  const [dataLength, setDataLength] = useState(0);
  const [answeredLength, setAnsweredLength] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const quizItemsPromise = fetchQuizItems();

    quizItemsPromise
      .then((quizItems) => {
        // Access the quizItems array and process/store the data as needed
        console.log(quizItems); // Example: Log the array to the console
        setQuizData(quizItems);
        setDataLength(quizItems.length);
      })
      .catch((error) => {
        // Handle error
      });
  }, []);

  // useEffect(() => {
    
  // }, [answeredLength]);
  console.log({ totalMark });
  //   console.log({ quizData });
  return {
    quizData,
    totalMark,
    answeredLength,
    dataLength,
    isSubmitted,

    setQuizData,
    setTotalMark,
    setAnsweredLength,
    setIsSubmitted,
  };
};

export default Index;
