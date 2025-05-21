import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFireAlt } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Embedded styles */}
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          z-index: 999;
        }

        .logo {
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: #e25822;
        }

        .logo-icon {
          margin-right: 0.5rem;
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .links a {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
          cursor: pointer;
        }

        .links a:hover {
          color: #e25822;
        }

        .menuBtn {
          padding: 0.5rem 1rem;
          background: #e25822;
          color: white;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .menuBtn:hover {
          background: #c84612;
        }

        .hamburger {
          display: none;
          font-size: 1.8rem;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .navLinks {
            display: none;
            position: absolute;
            top: 70px;
            right: 2rem;
            background: white;
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            border-radius: 8px;
          }

          .navLinks.showmenu {
            display: flex;
          }

          .hamburger {
            display: block;
          }
        }
      `}</style>

      <nav className="navbar">
        {/* Brand Name + Icon */}
        <div className="logo">
          <FaFireAlt className="logo-icon" />
          <span>The Fork & Flame</span>
        </div>

        {/* Navigation Links */}
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                key={element.id}
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setShow(false)}
              >
                {element.title}
              </Link>
            ))}
          </div>

          {/* OUR MENU Button – Scrolls to #menu section */}
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setShow(false)}
          >
            <button className="menuBtn">OUR MENU</button>
          </Link>
        </div>

        {/* Hamburger Toggle */}
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
