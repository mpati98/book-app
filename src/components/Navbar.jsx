import React, { useState } from "react";
import { navbarStyles } from "../assets/dummystyles";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/yeutruyenlogo.jpg";
import { navItems } from "../assets/dummydata";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <nav className={navbarStyles.nav(scrolled)}>
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
          {/* {MOBILE MENU BTN} */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={navbarStyles.menuBtn}
            >
              <div className={navbarStyles.menuGradient} />
              <div className="relative">
                {isOpen ? (
                  <X className={navbarStyles.menuIcon} />
                ) : (
                  <Menu className={navbarStyles.menuIcon} />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* {MENU MOBILE NAVIGATION} */}
      {isOpen && (
        <div className={navbarStyles.mobileMenu}>
          <div className={navbarStyles.mobileContainer}>
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={navbarStyles.mobileNavItem(isActive, item.color)}
                  >
                    <span
                      className={navbarStyles.mobileNavText(
                        isActive,
                        item.color
                      )}
                    >
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
