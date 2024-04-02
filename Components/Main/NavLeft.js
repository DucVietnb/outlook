import "./MainPage.css";
const NavLeft = () => {
  return (
    <div className="nav__left">
      <div className="nav__setup">
        <div className="nav__child">
          <i class="far fa-calendar-check"></i>
        </div>
        <div className="nav__child">
          <i class="far fa-bell"></i>
        </div>
        <div className="nav__child">
          <i class="fas fa-cog"></i>
        </div>
        <div className="nav__child">
          <i class="far fa-lightbulb"></i>{" "}
        </div>
        <div className="nav__child">
          <i class="fas fa-window-minimize"></i>
        </div>
        <div className="nav__child">
          <i class="fas fa-window-restore"></i>
        </div>
        <div className="nav__child">
          <i class="fas fa-times"></i>
        </div>
      </div>
    </div>
  );
};
export default NavLeft;
