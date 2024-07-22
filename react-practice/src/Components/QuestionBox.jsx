import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import ProgressBar from "./ProgressBar";
import Options from "./Options";
import Buttons from "./Buttons";
import QuestionTitle from "./QuestionTitle";

function QuestionBox() {
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
  ];

  function handleNextOnClick(e){
      console.log("he;lo");
  }
  return (
    <div className="QuestionBox">
      <ProgressBar></ProgressBar>

      <QuestionTitle ques={desc[1].ques}></QuestionTitle>

      <div className="option-box">
        {desc[1].options.map((val) => (
          <Options val={val} handleOnClick={(e)=>handleNextOnClick} key={val}></Options>
        ))}
      </div>

      <div className="button-box">
        <Buttons btnTxt="Back"></Buttons>
        <Buttons btnTxt="Next"></Buttons>
      </div>
    </div>
  );
}
export default QuestionBox;
