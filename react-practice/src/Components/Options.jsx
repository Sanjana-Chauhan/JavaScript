import "../App.css"
function Options({val,handleOnClick}) {
    return <div className="opt-val" onClick={handleOnClick}>{val}</div>;
  }
  export default Options;
