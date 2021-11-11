import './Button.css';

function Button({
  onButtonClick, type, classes, text, children,
}) {

  function handleClick(evt) {
    onButtonClick(evt);
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
