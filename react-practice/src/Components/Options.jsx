import "../App.css"
function Options({val,handleOptionsOnClick}) {
    return <div className="opt-val" onClick={handleOptionsOnClick}>{val}</div>;
  }
  export default Options;
