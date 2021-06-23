import styled from "styled-components";

export const StyledScrollButton = styled.div`
  background-color: black;
  .btn1 {
    margin-right: 2px;
    position: fixed; /* Fixed/sticky position */
    bottom: 110px; /* Place the button at the bottom of the page */
    right: 0; /* Place the button 30px from the right */
    z-index: 99; /* Make sure it does not overlap */
    border: none; /* Remove borders */
    outline: none; /* Remove outline */
    cursor: pointer; /* Add a mouse pointer on hover */
    padding: 15px; /* Some padding */
  }
  .btn2 {
    margin-right: 2px;
    position: fixed; /* Fixed/sticky position */
    bottom: 165px; /* Place the button at the bottom of the page */
    right: 0; /* Place the button 30px from the right */
    z-index: 99; /* Make sure it does not overlap */
    border: none; /* Remove borders */
    outline: none; /* Remove outline */
    cursor: pointer; /* Add a mouse pointer on hover */
    padding: 15px; /* Some padding */
  }
  .btn3 {
    margin-right: 2px;
    position: fixed; /* Fixed/sticky position */
    bottom: 55px; /* Place the button at the bottom of the page */
    right: 0; /* Place the button 30px from the right */
    z-index: 99; /* Make sure it does not overlap */
    border: none; /* Remove borders */
    outline: none; /* Remove outline */
    cursor: pointer; /* Add a mouse pointer on hover */
    padding: 15px; /* Some padding */
  }
  :hover {
    background-color: #555; /* Add a dark-grey background on hover */
  }
`;

export default StyledScrollButton;
