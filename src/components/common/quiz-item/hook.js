import React, { useState, useEffect } from "react";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const Hook = (content, setAnsweredLength, setTotalMark, isSubmitted) => {
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
  const [isAnswered, setIsAnswered] = useState(0);
  const [answerState, setAnswerState] = useState("N");
  const [styleState, setStyleState] = useState("normal");

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

  useEffect(() => {
    if (isSubmitted) {
      if (answer === currentAnswer) {
        setStyleState("true");
      } else {
        setStyleState("false");
      }
    }
    console.log({ styleState });
  }, [isSubmitted]);

  useEffect(() => {
    if (isAnswered === 1) {
      setAnsweredLength((prev) => prev + 1);
    }

    if (answer === currentAnswer) {
      if (answerState === "N") {
        setTotalMark((prev) => prev + 1);
        setAnswerState("+1");
      } else if (answerState === "-1") {
        setTotalMark((prev) => prev + 1);
        setAnswerState("+1");
      }
    } else {
      if (answerState === "+1") {
        setTotalMark((prev) => prev - 1);
        setAnswerState("-1");
      } else if (answerState === "-1") {
        setAnswerState("N");
      }
    }
  }, [isAnswered]);

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

  return {
    question,
    quizDataArr,
    options,
    currentAnswer,
    answer,
    styleState,

    setCurrentAnswer,
    setIsAnswered,
  };
};

export default Hook;
