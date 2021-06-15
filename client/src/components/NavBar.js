import styled from "styled-components";

const Nav = styled.nav`
  padding: 20px;
  width: 100%;
  list-style-type: none;
  float: left;

  .forms_input {
    border-radius: 10px 0 0 10px;
    padding: 10px 20px;
    border: 1.3px solid white;
    border-right: 0;
    width: fit-content;
  }

  .forms_button {
    float: left;
    min-width: 150px;
    max-width: 250px;
    display: block;
    margin: 1em;
    padding: 1em 2em;
    border: none;
    background: none;
    color: inherit;
    align-items: middle;
    position: relative;
    z-index: 1;
  }
`;

export default Nav;
