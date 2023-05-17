import "./Spacebutton.css";

const Spacebutton = ({ name, Function }) => {
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          Function();
        }}
        type="button"
      >
        <strong>{name}</strong>
        <div id="container-stars">
          <div id="stars" />
        </div>
        <div id="glow">
          <div className="circle" />
          <div className="circle" />
        </div>
      </button>
    </div>
  );
};

export default Spacebutton;
