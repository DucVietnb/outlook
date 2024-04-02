import "./Nav.css";
import logo from "../../assets/images/logo.JPG";
const NavTop = () => {
  return (
    <div className="nav__top">
      <div className="logo">
        <img src={logo} />
      </div>

      <div className="center">
        <p className="outlook">Outlook</p>
        <div className="search__tab">
          <i className="fas fa-search"></i>
          <input className="search__input" type="search" placeholder="Search" />
        </div>
      </div>
      <div className="end">
        <div className="end__child">
          <i class="far fa-calendar-check"></i>
        </div>
        <div className="end__child">
          <i class="far fa-bell"></i>
        </div>
        <div className="end__child">
          <i class="fas fa-cog"></i>
        </div>
        <div className="end__child">
          <i class="far fa-lightbulb"></i>{" "}
        </div>
        <div className="end__child">
          <i class="fas fa-window-minimize"></i>
        </div>
        <div className="end__child">
          <i class="fas fa-window-restore"></i>
        </div>
        <div className="end__child">
          <i class="fas fa-times"></i>
        </div>
      </div>
    </div>
  );
};
export default NavTop;
