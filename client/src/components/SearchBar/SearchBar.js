import styled from "styled-components";

/* export const SearchBarStyle = styled.div`
  font-family: "Lato", sans-serif;
  padding: 20px;
  width: 100%;
  margin-left: 0;
  background-color: red;
  justify-content: center;
`; */

export const TopNav = styled.nav`
  text-align: center;
  font-family: "Lato", sans-serif;
  margin-bottom: -20px;
  input {
    border: 0;
    background-color: rgba(255, 255, 255, 0.2);
  }
  .nav {
    padding: 0.5px;
    margin-top: 15px;
  }
  .form {
    margin: 20px;
  }
  .forms_input {
    font-family: "Lato", sans-serif;
    border-radius: 10px 0 0 10px;
    padding: 10px 20px;
    border: 1.3px solid grey;
    border-right: 0;
    width: 230px;
  }
  .forms_button {
    font-family: "Lato", sans-serif;
    border-radius: 0 10px 10px 0;
    padding: 10px 20px;
    font-style: bold;
    background-color: rgba(255, 255, 255, 0.2);
    border: 1.3px solid grey;
    border-left: 0;
    color: grey;
    margin-right: 15px;
  }
  .forms_button2 {
    text-decoration: none;
    font-family: "Lato", sans-serif;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 0px 15px;
    font-style: bold;
    background-color: rgba(255, 255, 255, 0.2);
    border: 1.3px solid grey;
    color: grey;
  }

  .forms_button2:hover {
    border-top-color: #737373;
    background: #737373;
    color: #ccc;
  }
  .forms_button2:active {
    border-top-color: #ffffff;
    background: #ffffff;
  }
  .select {
    font-size: medium;

    font-family: "Lato", sans-serif;
    padding: 10px;
    margin: 20px 0;
    border-radius: 10px;
    background-color: white;
  }
`;

export default TopNav;
