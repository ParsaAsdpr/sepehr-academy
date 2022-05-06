import React, { useState } from "react";
import "./navbar.css";
import { NavbarLink } from "./NavbarLink";
import { GradientBox } from "./Gradientbox";
import { TransparentButton } from "../common/TransparentButton";
import { LinkButton } from "../common/LinkButton";
import { Logo } from "../Navbar/Logo";
import { MobileSign } from "./MobileSign";
import { RiCloseFill, RiMenu3Line} from "react-icons/ri"

const Navbar = props => {
  const [ MenuItems, setMenuItems] = useState( [
    { title: "دوره ها", url: "Courses", cName: "nav-links" },
    { title: "مدرسین", url: "Tutors", cName: "nav-links" },
    { title: "بلاگ", url: "Articles", cName: "nav-links" },
    { title: "تماس با ما", url: "ContactUs", cName: "nav-links" },
  ]);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked( !clicked );
  };

  return ( 
  <header className="shadow-md">
    <nav className="NavbarItems">
      <div className="cont">
          <MobileSign></MobileSign>
        <h1 className="navbar-logo">
          <Logo></Logo>
        </h1>
        <div className="menu-icon" onClick={handleClick}>
          {clicked ? <RiCloseFill /> : <RiMenu3Line />}
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
              <li key={index}>
                <NavbarLink
                  cName={item.cName}
                  url={item.url}
                  title={item.title}
                  ></NavbarLink>
              </li>
          ))}
        </ul>
      </div>
      <GradientBox>
        <TransparentButton title="ورود" path="/SignIn"></TransparentButton>
         <LinkButton title="ثبت نام" path="/SignIn"></LinkButton>
      </GradientBox>
    </nav>
  </header>

   );
}
 
export { Navbar };
