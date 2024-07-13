import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import ProgressBar from "./ProgressBar";
import Options from "./Options";
import Buttons from "./Buttons";
import QuestionTitle from "./QuestionTitle";

function QuestionBox() {
  let desc = {
    ques: "Q1. This is Question title",
    options: [" Option 1", " Option 2", " Option 3", " Option 4"],
    ans: "Option 1"
  };
  return (
    <div className="QuestionBox">
      <ProgressBar></ProgressBar>

      <QuestionTitle ques={desc.ques}></QuestionTitle>

      <div className="option-box">
        {desc.options.map((val) => (
          <Options val={val}></Options>
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
