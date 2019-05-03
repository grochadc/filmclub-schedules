import React from "react";
import Movie from "./components/Movie";
import FilmClub from "./components/FilmClub";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

function App() {
  return (
    <Container>
      <FilmClub
        venue="Casa del Arte CUSUR"
        day="Martes"
        time="20:00"
        title="Hitchcock: El Maestro del Suspenso"
      >
        <Movie title="Psycho" date="2 de Abril" />
        <Movie title="Vertigo" date="9 de Abril" />
        <Movie title="Marnie" date="30 de Abril" />
        <Movie title="Rebecca" date="7 de Mayo" />
      </FilmClub>
      <FilmClub
        venue="Centro Cultural Jose Clemente Orozco"
        day="Miercoles"
        time="16:00"
        title="Quentin Tarantino"
      >
        <Movie title="Inglorious Basterds" date="30 de Abril" />
        <Movie title="Pulp Fiction" date="7 de Mayo" />
      </FilmClub>
    </Container>
  );
}

export default App;
