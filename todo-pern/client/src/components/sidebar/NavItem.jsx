/* eslint-disable react/prop-types */
function NavItem(props) {
  return (
    <>
      <li className="nav-item">
        <a
          className="nav-link text-white"
          aria-current="page"
          href={props.href}
          target={props.openWindow ? '_blank' : '_self'}
          rel="noreferrer"
          onClick={props.onClick}
        >
          <i className={`socials-icon ${props.classes}`}></i>
          <span className="socials-title">{props.title}</span>
        </a>
      </li>
    </>
  );
}

export default NavItem;
