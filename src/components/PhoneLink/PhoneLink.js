import './PhoneLink.css';

function PhoneLink({ classes, children }) {
  return (
    <a href="tel:+79508022222" className={`phone-link ${classes && classes}`}>
      {children}
    </a>
  );
}

export default PhoneLink;
