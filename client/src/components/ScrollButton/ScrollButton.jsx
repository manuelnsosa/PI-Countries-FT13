import React from "react";
import { StyledScrollButton } from "./ScrollButton";
import { Link } from "react-router-dom";
import { getAllCountries } from "../../actions";
import { useDispatch } from "react-redux";

export function ScrollButton() {
  const dispatch = useDispatch();

  const moveFunction = (e) => {
    if (e === "top") {
      document.documentElement.scrollTop = 0;
    } else {
      //document.documentElement.ScrollButton = 0;
      let x = 0;
      let y = 150;
      window.scrollTo((x = 0), (y = 2000));
    }
  };
  return (
    <StyledScrollButton>
      <Link
        to="/home"
        onClick={() => {
          dispatch(getAllCountries);
        }}
        type="submit"
      >
        <img
          className="btn2"
          src="https://img.icons8.com/android/48/000000/circled-left-2.png"
        />
      </Link>

      <img
        className="btn1"
        src="https://img.icons8.com/android/48/000000/circled-up-2.png"
        onClick={() => {
          moveFunction("top");
        }}
        id="myBtn"
        title="Go to top"
      />

      <img
        className="btn3"
        src="https://img.icons8.com/android/48/000000/circled-down-2.png"
        onClick={() => {
          moveFunction("down");
        }}
        id="myBtn2"
        title="Go to bottom"
      />
    </StyledScrollButton>
  );
}
export default ScrollButton;
