import React from "react";

/* Components */
import QuizItem from "../common/quiz-item/QuizItem";

/* Hook */
import Hook from "./hook";

const SequentialMode = () => {
  const {
    quizData,
    totalMark,
    answeredLength,
    dataLength,
    isSubmitted,

    setQuizData,
    setTotalMark,
    setAnsweredLength,
    setIsSubmitted,
  } = Hook();

  return (
    <div className="bg-base-200 py-5">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[70%] flex flex-col gap-5">
          {quizData?.map((item, index) => {
            const qNumber = index + 1;

            return (
              <QuizItem
                key={index}
                content={item}
                qNumber={qNumber}
                isSubmitted={isSubmitted}
                /* Actions */
                setAnsweredLength={setAnsweredLength}
                setTotalMark={setTotalMark}
              />
            );
          })}

          {!isSubmitted && (
            <button
              className={`btn btn-success ${
                answeredLength === dataLength
                  ? "bg-opacity-100"
                  : "bg-opacity-60"
              }`}
              onClick={() => setIsSubmitted(true)}
              disabled={answeredLength !== dataLength}
            >
              Submit
            </button>
          )}

          {isSubmitted && (
            <div className="my-5">
              <h1 className="text-center">
                Your total mark is{" "}
                <span className="text-2xl font-bold text-primary">
                  {totalMark}/{dataLength}
                </span>
                .
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SequentialMode;
