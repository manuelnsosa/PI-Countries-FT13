import styled from "styled-components";

export const PaginationStyle = styled.div`
  text-align: center;
  margin-top: -10px;
  .btn {
    font-family: "Lato", sans-serif;
    margin: 5px;
    padding: 5px;
    border-radius: 8px;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.2);
    border: 2px solid grey;
    color: grey;
  }

  .btn:hover {
    border-top-color: #737373;
    background: #737373;
    color: #ccc;
  }
  .btn:active {
    border-top-color: #ffffff;
    background: #ffffff;
  }
`;

export default PaginationStyle;
