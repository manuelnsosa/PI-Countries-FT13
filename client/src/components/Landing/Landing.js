import styled from "styled-components";

export const LandingStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .btn {
    font-family: "Lato", sans-serif;
    font-size: 20px;
    font-weight: bold;
    margin-left: 47%;
    margin-top: 360px;
    padding: 15px;
    border-radius: 8px;
    text-decoration: none;
    background-color: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.9023984593837535) 0%,
      rgba(228, 228, 228, 0.3225665266106442) 100%
    );
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
  .stringStyle {
    margin-left: 40%;
    margin-top: 53px;
    font-family: "Lato", sans-serif;
    color: white;
  }
`;

export default LandingStyle;
