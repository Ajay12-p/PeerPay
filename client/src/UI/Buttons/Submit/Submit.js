import "./Submit.css";
const Submit = ({ Name, Nextname, Function }) => {
  return (
    <div>
      <button
        className="btnS"
        onClick={() => {
          Function();
        }}
      >
        <div>
          <span>
            <p>{Name}</p>
          </span>
        </div>
        <div>
          <span>
            <p>{Nextname}</p>
          </span>
        </div>
      </button>
    </div>
  );
};

export default Submit;
