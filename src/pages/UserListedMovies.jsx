import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import CardSlider from "../components/CardSlider";

export default function UserListedMovies() {
  const {user}=useSelector((state)=>state.profile)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState(undefined);



  useEffect(() => {

  }, []);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <CardSlider data={user?.listing} title="My List" />
      <CardSlider data={user?.likes}  title="Liked Movies" />
      <CardSlider
        data={user?.dislikes} 
        title="Dislike Movies"
      />
 
    </Container>
  );
}

const Container = styled.div`
 margin-top: 50px;
`;
