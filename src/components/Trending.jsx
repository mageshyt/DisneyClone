import React from "react";
import styled from "styled-components";
import { selectMovies } from "../features/movies/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectTrending } from "../features/movies/movieSlice";

const Trending = (props) => {
  const movies = useSelector(selectTrending);
  console.log(movies, ":🔥");
  return (
    <Container>
      <h4>Trending</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

export default Trending;
const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  overflow: hidden;
  border-radius: 10px;
  overflow: hidden;
  border: 4px solid rgba(249, 249, 249, 0.1);
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 72%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0, 46, 0.45, 0.94);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s;
  }
  &:hover {
    box-shadow: rgb(0 0 0 /72%) 0px 40px 56px -16px;
    transform: scale(1.02);
    border-color: rgba(249, 249, 249, 0.7);
  }
`;
