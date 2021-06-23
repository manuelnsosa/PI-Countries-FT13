import styled from "styled-components";

export const ContainerStyle = styled.div`
  width: 95%;
  color: grey;
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);

  .link {
    text-decoration: none;
  }
`;

export default ContainerStyle;
