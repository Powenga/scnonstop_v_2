import './Button.css';

function Button({ onClick, type, classes, text, children }) {
  function handleClick(evt) {

  }

  return (
    <button
      onClick={handleClick}
      type={type}
      className={`button ${classes && classes}`}
    >
      {children}
    </button>
  );
}

export default Button;
