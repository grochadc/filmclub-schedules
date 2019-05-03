import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: solid 2px black;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
`;
const Movies = styled.div`
  display: flex;
`;
const FilmClub = props => {
  return (
    <Container>
      <h1>{props.title}</h1>
      <h2>{props.venue}</h2>
      <h3>
        {props.day} {props.time}
      </h3>
      <Movies>{props.children}</Movies>
    </Container>
  );
};

export default FilmClub;
