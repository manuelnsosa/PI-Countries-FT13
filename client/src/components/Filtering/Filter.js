import styled from "styled-components";
export const FilterStyle = styled.div`
  font-family: "Lato", sans-serif;
  text-align: center;
  margin: 0px;
  .select {
    font-size: medium;
    font-family: "Lato", sans-serif;
    padding: 10px;
    border-radius: 10px;
    background-color: white;
    margin: 15px;
  }
  .btn {
    text-decoration: none;
    font-family: "Lato", sans-serif;
    border-radius: 10px;
    padding: 10px 20px;
    margin: 0px 15px;
    font-style: bold;
    background-color: rgba(255, 255, 255, 0.2);
    border: 1.3px solid black;
    color: black;
  }
  .btn:hover {
    border: white;
    background: #737373;
    color: white;
  }
  .btn:active {
    border-top-color: #ffffff;
    background: #ffffff;
  }
`;
export default FilterStyle;
