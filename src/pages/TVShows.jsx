import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import CardSlider from "../components/CardSlider";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import SelectGenre from "../components/SelectGenre";
import Slider from "../components/Slider";

function TVShows() {
  const [isScrolled, setIsScrolled] = useState(false);
  // const movies = useSelector((state) => state.netflix.movies);
  // const genres = useSelector((state) => state.netflix.genres);
  // const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  // const dataLoading = useSelector((state) => state.netflix.dataLoading);
  const {trending,newReleased,popular,buster,loading}=useSelector((state)=>state.movies)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
  
  }, []);

  useEffect(() => {
  
  }, []);

  const [user, setUser] = useState(undefined);

 
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="data">
        <SelectGenre genres={[]} type="tv" />
        {trending.length ? (
          <>
            <Slider trending={trending} />
          </>
        ) : (
          <h1 className="not-available">
            No TV Shows avaialble for the selected genre. Please select a
            different genre.
          </h1>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      margin-top: 4rem;
    }
  }
`;
export default TVShows;
