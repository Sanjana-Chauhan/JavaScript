function ProgressBar() {
  return (
    <div
      className="progress progress-custom"
      role="progressbar"
      aria-label="Info example"
      aria-valuenow="50"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div className="progress-bar bg-warning" style={{ width: "50%" }}></div>
    </div>
  );
}
export default ProgressBar;
