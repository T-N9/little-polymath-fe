import React from "react";
import { nanoid } from "nanoid";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Hook from "./hook";

const QuizItem = ({
  content,
  qNumber,
  isSubmitted,

  /* Actions */
  setAnsweredLength,
  setTotalMark,
}) => {
  const {
    question,
    quizDataArr,
    options,
    currentAnswer,
    answer,
    styleState,
    /* actions */
    setCurrentAnswer,
    setIsAnswered,
  } = Hook(content, setAnsweredLength, setTotalMark, isSubmitted);

  return (
    <div
      className={`quiz-item p-5 shadow quiz-section border bg-white border-primary ${styleState}`}
    >
      {/* <h1>{topic}</h1> */}
      <div className="">
        <div className="flex gap-4">
          <b className="font-bold text-xl">Q{qNumber}.</b>
          <div className="">{documentToReactComponents(question, options)}</div>
        </div>

        <div className="flex flex-wrap justify-between gap-2 mt-6">
          {quizDataArr?.map((item, index) => {
            const optionId = nanoid();
            return (
              <div
                key={index}
                className={`flex gap-4 items-center  ${
                  isSubmitted && "pointer-events-none opacity-90"
                }`}
              >
                <input
                  id={optionId}
                  type="radio"
                  name={"quiz option " + optionId}
                  className={`${
                    currentAnswer === item.optionMark
                      ? "radio-info radio"
                      : "radio"
                  }`}
                  onChange={() => {
                    setCurrentAnswer(item.optionMark);
                    setIsAnswered((prev) => prev + 1);
                  }}
                  checked={currentAnswer === item.optionMark}
                />
                <label
                  onChange={() => {
                    setCurrentAnswer(item.optionMark);
                  }}
                  htmlFor={optionId}
                  className="cursor-pointer select-none"
                >
                  {documentToReactComponents(item.option, options)}
                </label>
                {/* <span>{item.optionMark}</span> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizItem;
