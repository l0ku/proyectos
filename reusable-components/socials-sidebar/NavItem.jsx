/* eslint-disable react/prop-types */
function NavItem(props) {
  return (
    <>
      <li className="nav-item">
        <a
          className="nav-link text-white"
          aria-current="page"
          href={props.href}
          target="_blank"
          rel="noreferrer"
        >
          <i className={`socials-icon ${props.classes}`}></i>
          <span className="socials-title">{props.title}</span>
        </a>
      </li>
    </>
  );
}

export default NavItem;
