import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { useState } from "react";
import ProgressBar from "./ProgressBar";
import Options from "./Options";
import Buttons from "./Buttons";
import QuestionTitle from "./QuestionTitle";

function QuestionBox() {

  let [quesNo,setQuesNo]=useState(0);
  let desc = [
    {
      ques: "Q1. This is Question title first",
      options: [" Option 1", " Option 2", " Option 3", " Option 4"],
      ans: "Option 1",
    },
    {
      ques: "Q2. This is Question title second",
      options: [" Option S", " Option 2S", " Option 3S", " Option 4S"],
      ans: "Option 1",
    },
    {
      ques: "Q3. This is Question title third",
      options: [" Option T1", " OptionT 2", " Option t3", " Optiont 4"],
      ans: "Option 1",
    },
    {
      ques: "Q4. This is Question title fourth",
      options: [" Option F1", " Option F2", " Option F3", " Optiont F4"],
      ans: "Option 1",
    },
  ];

  function handleNextOnClick(){
      console.log("hello");
      if(quesNo==desc.length-1){
        setQuesNo(0);
      }
      else{
        setQuesNo(quesNo+1);
      }
      
  }
  function handleBackOnClick(){
    console.log("Back");
    if(quesNo==0){
      setQuesNo(0);
    }
    else{
      setQuesNo(quesNo-1);
    }
    
}
function handleOptionsOnClick(e){
    console.log(e.target.innerText)
}
  return (
    <div className="QuestionBox">
      <ProgressBar></ProgressBar>

      <QuestionTitle ques={desc[quesNo].ques}></QuestionTitle>

      <div className="option-box">
        {desc[1].options.map((val) => (
          <Options val={val} key={val} handleOptionsOnClick={(e) => handleOptionsOnClick(e)}></Options>
        ))}
      </div>

      <div className="button-box">
        <Buttons btnTxt="Back" handleOnClick={handleBackOnClick}></Buttons>
        <Buttons btnTxt="Next"  handleOnClick={handleNextOnClick}></Buttons>
      </div>
    </div>
  );
}
export default QuestionBox;
