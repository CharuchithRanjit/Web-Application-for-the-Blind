import React, {useRef} from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import udio1 from './assets/Home.mp3'
import udio2 from './assets/Login.mp3'
import udio3 from './assets/Courses.mp3'
function Header() {
  const header_title = useRef(null)
  const header_title1 = useRef(null)
  const header_option = useRef(null)
  const user = null;
  const audio1 = new Audio(udio1);
  const audio2 = new Audio(udio2);
  const audio3 = new Audio(udio3);
  const speak = () => {
    audio1.play();
  }
  const dontspeak = () => {
    header_title.current.innerHTML = "E4A"
    audio1.pause();
  }
  const speak1 = () => {
    audio2.play();
  }
  const dontspeak1 = () => {
    header_option.current.innerHTML = "Login/Register"
    audio2.pause();
  }
  const speak2 = () => {
    audio3.play();
  }
  const dontspeak2 = () => {
    header_option.current.innerHTML = "Courses"
    audio3.pause();
  }
  return (
    <div className="header">
      <Link to="/">
        <div className="header_title"  ref={header_title} onMouseEnter={() => speak()} onMouseLeave={() => dontspeak()} >E4A</div>
      </Link>
      <Link to="/Courses"><div className="header_title1" ref={header_title1} onMouseEnter={() => speak2()} onMouseLeave={() => dontspeak2()}>Courses</div></Link>
      
      <div className="header_title">About Us</div>
      <div className="sp1"></div>
      <div className="header_nav">
        <Link to="/login">
          <div className="header_option" ref={header_option} onMouseEnter={() => speak1()} onMouseLeave={() => dontspeak1()}>
            {!user ? "Login/Register" : user.email}
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;
