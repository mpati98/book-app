import { navItems } from "../assets/bookappdata";
import { navbarStyles } from "../assets/dummystyles";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/yeutruyenlogo.jpg";

const Navbar = () => {
  const location = useLocation();


  return (
    <nav className={navbarStyles.nav}>
      <div className={navbarStyles.container}>
        <div className="flex items-center justify-between">
          {/* {Logo} */}
          <Link to="/" className={navbarStyles.logoContainer}>
            <div className="relative group">
              <div className={navbarStyles.logoGradient} />
              <div className="relative flex items-center">
                <img src={logo} alt="logo" className={navbarStyles.logoImage} />
                <div className="ml-2">
                  <h1 className={navbarStyles.logoText}>YÊU TRUYỆN</h1>
                  <div className={navbarStyles.logoUnderline}></div>
                </div>
              </div>
            </div>
          </Link>
          {/* {DESKTOP NAVIGATION} */}
          <div className={navbarStyles.desktopNavWrapper}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                key={item.name}
                to={item.path}
                className={navbarStyles.navLink}
                >
                  <div className="relative z-10 flex items-center">
                    <div className=" relative ">
                      <div
                        className={navbarStyles.navIconWrapper(item.color)}
                        />
                      <item.icon className={navbarStyles.navIcon(isActive)} />
                    </div>
                    <span
                      className={navbarStyles.navText(isActive, item.color)}
                      >
                      {item.name}
                    </span>
                    {isActive && (
                      <span
                        className={navbarStyles.navUnderline(item.color)}
                      ></span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
