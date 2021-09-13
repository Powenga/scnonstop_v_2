import './PhoneLink.css';

function PhoneLink({ classes, children }) {
  return (
    <a href="tel:+79508022222" className={`phone-link ${classes && classes}`}>
      <span className="phone-link__text">
        {children}
      </span>
    </a>
  );
}

export default PhoneLink;
