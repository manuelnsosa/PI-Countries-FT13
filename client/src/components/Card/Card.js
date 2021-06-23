import styled from "styled-components";

export const CardStyle = styled.div`
  font-family: "Lato", sans-serif;
  height: 250px;
  text-align: center;
  padding-bottom: 5px;
  .containerimg {
    text-align: center;
  }
  .flag {
    margin-top: 5px;
    text-align: center;
    top: 50%;
    left: 50%;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid grey;
    height: 110px;
    width: 180px;
    object-fit: cover;
    color: white;
  }
  .text {
    font-size: 22px;
    text-align: center;
    color: #494949;
  }
  .textcontinent {
    font-size: 20px;
    color: #8c9a9e;
  }
`;

export default CardStyle;
