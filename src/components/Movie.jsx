import React from "react";
import styled from "styled-components";

const radius = "5px";

const MovieContainer = styled.div`
  border: solid 1px black;
  width: 100px;
  margin-bottom: 10px;
  margin-right: 10px;
  border-radius: ${radius};
`;

const Poster = styled.div`
  height: 125px;
  width: 100%;
  background-color: grey;
  border-radius: ${radius} 0 0;
`;

const Title = styled.div`
  width: 100px;
  height: 30px;
  font-weight: bold;
  background-color: palevioletred;
  text-align: center;
  border-radius: 0 0 ${radius};
`;

const Schedule = styled.div`
  width: 100px;
  text-align: center;
`;

const Movie = props => {
  return (
    <div>
      <MovieContainer>
        <Poster />
        <Title>{props.title}</Title>
      </MovieContainer>
      <Schedule>
        <b>{props.date}</b>
      </Schedule>
    </div>
  );
};
export default Movie;
