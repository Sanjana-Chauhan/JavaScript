import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { useState } from "react";
import ProgressBar from "./ProgressBar";
import Options from "./Options";
import QuestionTitle from "./QuestionTitle";
import Buttons from "./Buttons"
function QuestionBox() {

  let [quesNo,setQuesNo]=useState(0);
  let desc = [
    {
      ques: "Q1.What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Chandigarh", "Kolkata"],
      ans: 1,
    },
    {
      ques: "Q2. How many colours are there in rainbow?",
      options: ["Five 5"," Nine 9", "Seven 7",  "Six 6"],
      ans: 2,
    },
    {
      ques: "Q3.Which of the following is not an Object Oriented Programming Language?",
      options: ["C", "C++", " Java", "Python"],
      ans: 0,
    },
    {
      ques: "Q4.Which month has less than 30 days?",
      options: [" May", " January", "June", "February"],
      ans: 3,
    },
  ];

  function handleNextOnClick(){
    if(quesNo==desc.length-1){
      setQuesNo(0);
    }
    else{
      setQuesNo(quesNo+1);
    }    
}


function handleBackOnClick(){
  if(quesNo==0){
    setQuesNo(0);
  }
  else{
    setQuesNo(quesNo-1);
  }
  
}


 function handleOptionsOnClick(e){
    let answerIndex=desc[quesNo].ans
    if(e.target.innerText==desc[quesNo].options[answerIndex]){
      e.target.classList.add("correctAns")
      setTimeout( handleNextOnClick,500)
    }
    else{
      e.target.classList.add("WrongAns")
    }
    
   
}
  return (
    <div className="QuestionBox">

      <ProgressBar progress={(100/(desc.length))*(quesNo+1)}></ProgressBar>

      <QuestionTitle ques={desc[quesNo].ques}></QuestionTitle>

      <div className="option-box">
        {desc[quesNo].options.map((val) => (
          <Options val={val} key={val} handleOnClick={(e) => handleOptionsOnClick(e)}></Options>
        ))}
      </div>

      <div className="button-box">
        <Buttons btnTxt="Back" handleOnClick={handleBackOnClick}></Buttons>
        <Buttons id="Next" btnTxt={quesNo==3?"Submit":"Next"}  handleOnClick={handleNextOnClick}></Buttons>
     </div>

    </div>
  );
}
export default QuestionBox;
