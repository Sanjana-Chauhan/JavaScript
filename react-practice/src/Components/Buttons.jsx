import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
function Buttons(props) {
  return (
    <button type="button" className="btn btn-warning buttons-custom">
     {props.btnTxt}
    </button>
  );
}
export default Buttons;
