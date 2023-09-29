import React, { useState } from "react";
import OpenAI from "openai";
import "./grammer.css";

function Grammer() {
  const [text, setText] = useState("");
  const [correctedText, setCorrectedText] = useState("");

  const apiKey = process.env.REACT_APP_API_KEY;

  const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });

  const testGrammar = async () => {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You will be provided with statements, and your task is to convert them to standard English.",
        },
        {
          role: "user",
          content: `${text}`,
        },
        {
          role: "assistant",
          content: "",
        },
      ],
      temperature: 0,
      max_tokens: 256,
    });

    const returnText = response.choices[0].message.content;
    setCorrectedText(returnText);
  };

  const checkGrammar = (e) => {
    e.preventDefault();
    testGrammar();
  };

  const handleReset = () => {
    setText("");
    setCorrectedText("");
  };

  return (
    <div className="grammer_container">
      <div className="App">
        <h1>Grammar Checker</h1>
        <p>
          Check your English text for all types of mistakes: grammar, spellings,
          punctuation, and more.
        </p>
        <div className="textarea-container">
          <textarea
            id="grammarTextarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="5"
            placeholder="Type or paste your text here..."
          ></textarea>
        </div>
        <div className="btn_groups">
          <button onClick={checkGrammar} className="btn check_btn">
            Check Text
          </button>
          <button className="btn reset_btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
      {correctedText && (
        <div className="result_container">
          <h2>Corrected Sentence</h2>
          <p>{correctedText}</p>
        </div>
      )}
    </div>
  );
}

export default Grammer;
