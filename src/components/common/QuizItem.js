import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const QuizItem = ({ content, qNumber }) => {
  //   const { question, optionA, optionB, optionC, optionD, topic } = content?.fields;
  const topic = content.fields.topic;
  const question = content.fields.question;
  const optionA = content.fields.optionA;
  const optionB = content.fields.optionB;
  const optionC = content.fields.optionC;
  const optionD = content.fields.optionD;
  const answer = content.fields.answer;

  const [currentAnswer, setCurrentAnswer] = useState("");
  const [quizDataArr, setQuizDataArr] = useState();

  const optionArray = [
    { option: optionA, optionMark: "A" },
    { option: optionB, optionMark: "B" },
    { option: optionC, optionMark: "C" },
    { option: optionD, optionMark: "D" },
  ];

  // console.log({ qNumber });

  useEffect(() => {
    // Fisher-Yates shuffle algorithm
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    // Shuffling the optionArray
    setQuizDataArr(shuffleArray(optionArray));
  }, []);

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      // Add more custom renderers for other node types as needed
    },
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      // Add more custom renderers for other mark types as needed
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, description, file } = node.data.target.fields;
        const imageUrl = file.url;
        // console.log({ imageUrl });

        return <img className="w-[500px] mx-auto" src={imageUrl} alt={topic} />;
      },
    },
  };

  return (
    <div className="p-5 shadow quiz-section border  border-primary border-t-0 border-b-0 border-r-0 border-l-4">
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
              <div key={index} className="flex gap-4 items-center">
                <input
                  id={optionId}
                  type="radio"
                  name={"quiz option " + optionId}
                  className={
                    currentAnswer === item.optionMark
                      ? "radio-info radio"
                      : "radio"
                  }
                  onChange={() => {
                    setCurrentAnswer(item.optionMark);
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
