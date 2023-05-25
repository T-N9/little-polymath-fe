import { createClient } from "contentful";

const client = createClient({
  space: "61p882ry5vb6",
  accessToken: "yrcdkwHsiBGMVegKFaHHxb0-xU_nCdwG9r9jJzrOpBw",
});

export const fetchQuizItems = async () => {
  try {
    const response = await client.getEntries({
      content_type: "littlePolymath", // Replace 'quizItem' with your actual content type ID
    //   'fields.chapter': 'Chapter 1',
    });
    const quizItems = response.items; // Array of quiz items
    // Process and store quizItems data in your app's state or component
    console.log({ quizItems });
  } catch (error) {
    // Handle error
  }
};
