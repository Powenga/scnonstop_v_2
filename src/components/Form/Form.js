export default function Form({ name, classes, onSubmit, children }) {
  return (
    <form
      name={name}
      className={`form ${classes}`}
      noValidate
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
