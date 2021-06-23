import styled from "styled-components";
export const FormStyle = styled.div`
  .input {
    font-family: "Lato", sans-serif;
    border-radius: 0 10px 10px 0;
    padding: 10px 20px;
    border: 1.3px solid grey;
    border-left: 0;
    width: 230px;
  }
  .ha {
    font-family: "Lato", sans-serif;
    border-radius: 10px 0 0 10px;
    padding: 10px 20px;
    font-style: bold;
    background-color: rgba(255, 255, 255, 0.2);
    border: 1.3px solid grey;
    border-right: 0;
    color: grey;
    width: 80px;
  }
  .h2select {
    font-family: "Lato", sans-serif;
    text-align: center;
    border: 1.3px solid grey;
  }
  .formdivs {
    padding: 10px;
    margin: 10px;
  }
  .selectseason {
    font-family: "Lato", sans-serif;
    border-radius: 10px;
    padding: 10px 20px;
    border: 1.3px solid grey;
    width: 353px;
  }
  .selectorcheckbox {
    background-color: #fafafa;
    border: 1px solid #cacece;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 9px;
    border-radius: 10px;
    display: inline-block;
    position: relative;
  }
  .txtcheckbox {
    margin-top: 0;
    padding: 9px;
    border-radius: 3px;
    display: inline-block;
    position: relative;
    font-size: 14px;
  }
  .grid {
    font-family: "Lato", sans-serif;
    display: grid;
    grid-template-columns: repeat(3, 0.5fr);
    grid-auto-rows: minmax(15px, auto);
    margin-left: 200px;
  }
  .divform {
    text-align: center;
  }

  .btnaddact {
    text-decoration: none;
    font-family: "Lato", sans-serif;
    border-radius: 10px;
    padding: 10px 20px;
    margin-bottom: 30px;
    font-style: bold;
    background-color: rgba(255, 255, 255, 0.2);
    border: 1.3px solid grey;
    color: grey;
  }

  .btnaddact:hover {
    border-top-color: #737373;
    background: #737373;
    color: #ccc;
  }
  .btnaddact:active {
    border-top-color: #ffffff;
    background: #ffffff;
  }
  .divbtn {
    text-align: center;
    padding: 20px;
    margin-bottom: 40px;
  }
`;

export default FormStyle;
