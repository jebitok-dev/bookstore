import profile from '../images/profile.png';

const Navbar = () => (
  <div className="navbar mont">
    <div className="navbar-links">
      <h1 className="title">Bookstore CMS</h1>
      <a className="navbar-link selected" href="/index.html">
        BOOKS
      </a>
      <a className="navbar-link" href="/index.html">
        CATEGORIES
      </a>
    </div>
    <div>
      <img src={profile} className="profile" alt="profile" />
    </div>
  </div>
);

export default Navbar;
