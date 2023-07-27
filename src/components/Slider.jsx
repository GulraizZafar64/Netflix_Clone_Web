import React from "react";
import styled from "styled-components";
import CardSlider from "./CardSlider";
export default function Slider({ trending,newReleased,popular,buster }) {
  const getMoviesFromRange = (data) => {
    return data
  //  if(data.length){
  //   return data.slice(0, 10);
  //  }
  };
  return (
    <Container>
      <CardSlider data={getMoviesFromRange(trending?.results)} title="Trending Now" />
      <CardSlider data={getMoviesFromRange(newReleased?.results)}  title="New Releases" />
      <CardSlider
        data={getMoviesFromRange(buster?.results)} 
        title="Blockbuster Movies"
      />
      <CardSlider
       data={getMoviesFromRange(popular?.results)} 
        title="Popular on Netflix"
      />
      {/* <CardSlider data={getMoviesFromRange(trending?.results)}  title="Action Movies" />
      <CardSlider data={getMoviesFromRange(trending?.results)}  title="Epics" /> */}
    </Container>
  );
}

const Container = styled.div``;
