import React, { useEffect, useMemo, useState } from "react";
import "./app.css";
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [userName, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Which of the following is the correct name of React.js?",
      answers: [
        {
          text: "React",
          correct: false,
        },
        {
          text: "React.js",
          correct: false,
        },
        {
          text: "ReactJS",
          correct: false,
        },
        {
          text: "All of the above",
          correct: true,
        },
      ],
    },
    {
      id: 2,
      question: "Which of the following is not a disadvantage of React.js?",
      answers: [
        {
          text: "React.js has only a view layer. We have put your code for Ajax requests, events and so on.",
          correct: false,
        },
        {
          text: "The library of React.js is pretty large.",
          correct: false,
        },
        {
          text: "The JSX in React.js makes code easy to read and write.",
          correct: true,
        },
        {
          text: "The learning curve can be steep in React.js.",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What is the default port where webpack-server runs?",
      answers: [
        {
          text: "3000",
          correct: false,
        },
        {
          text: "8080",
          correct: true,
        },
        {
          text: "3030",
          correct: false,
        },
        {
          text: "6060",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Which of the following acts as the input of a class-based component?",
      answers: [
        {
          text: "Class",
          correct: false,
        },
        {
          text: "Factory",
          correct: false,
        },
        {
          text: "Render",
          correct: false,
        },
        {
          text: "Props",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Which of the following keyword is used to create a class inheritance?",
      answers: [
        {
          text: "Create",
          correct: false,
        },
        {
          text: "Inherits",
          correct: false,
        },
        {
          text: "Extends",
          correct: true,
        },
        {
          text: "This",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "How many numbers of elements a valid react component can return?",
      answers: [
        {
          text: "1",
          correct: true,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "4",
          correct: false,
        },
        {
          text: "5",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "How many ways of defining your variables in ES6?",
      answers: [
        {
          text: "1",
          correct: false,
        },
        {
          text: "3",
          correct: true,
        },
        {
          text: "4",
          correct: false,
        },
        {
          text: "5",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What is a state in React?",
      answers: [
        {
          text: "A permanent storage.",
          correct: false,
        },
        {
          text: "Internal storage of the component.",
          correct: true,
        },
        {
          text: "External storage of the component.",
          correct: false,
        },
        {
          text: "None of the above.",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What are the two ways to handle data in React?",
      answers: [
        {
          text: "State & Props",
          correct: true,
        },
        {
          text: "Services & Components",
          correct: false,
        },
        {
          text: "State & Component",
          correct: false,
        },
        {
          text: "State & Services",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which of the following option is correct in the case of the Babel?",
      answers: [
        {
          text: "Babel is a Compiler.",
          correct: false,
        },
        {
          text: "Babel is a Transpilar.",
          correct: false,
        },
        {
          text: "None of the above.",
          correct: false,
        },
        {
          text: "Both A and B are correct.",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "Does React.js create a VIRTUAL DOM in the memory?",
      answers: [
        {
          text: "TRUE",
          correct: true,
        },
        {
          text: "FALSE",
          correct: false,
        },
        {
          text: "Can be true or false",
          correct: false,
        },
        {
          text: "Cannot say",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which of the following is used to pass data to a component from outside in React.js?",
      answers: [
        {
          text: "SetState",
          correct: false,
        },
        {
          text: "Render with arguments",
          correct: false,
        },
        {
          text: "Props",
          correct: true,
        },
        {
          text: "PropTypes",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "What does ES6 stand for?",
      answers: [
        {
          text: "ECMAScript 6",
          correct: true,
        },
        {
          text: "ECMA 6",
          correct: false,
        },
        {
          text: "ECMAJavaScript 6",
          correct: false,
        },
        {
          text: "EJavaScript 6",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which of the following method refers to the parent class in React.js?",
      answers: [
        {
          text: "inherits()",
          correct: false,
        },
        {
          text: "self()",
          correct: false,
        },
        {
          text: "super()",
          correct: true,
        },
        {
          text: "this()",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "How can you set a default value for an uncontrolled form field?",
      answers: [
        {
          text: "By using the value property",
          correct: false,
        },
        {
          text: "By using the defaultValue property",
          correct: true,
        },
        {
          text: "By using the default property",
          correct: false,
        },
        {
          text: "It is assigned automatically.",
          correct: false,
        },
      ],
    },
  ];
  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 500" },
        { id: 4, amount: "$ 1000" },
        { id: 5, amount: "$ 2000" },
        { id: 6, amount: "$ 4000" },
        { id: 7, amount: "$ 8000" },
        { id: 8, amount: "$ 16000" },
        { id: 9, amount: "$ 32000" },
        { id: 10, amount: "$ 64000" },
        { id: 11, amount: "$ 125000" },
        { id: 12, amount: "$ 250000" },
        { id: 13, amount: "$ 500000" },
        { id: 14, amount: "$ 1000000" },
        { id: 15, amount: "$ 1500000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);
  return (
    <div className="app">
      {userName ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Quiz
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUserName={setUserName} />
      )}
    </div>
  );
}

export default App;
