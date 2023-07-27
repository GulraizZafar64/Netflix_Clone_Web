import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MoviePage from "./pages/Movies";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";
import Signup from "./pages/Signup";
import TVShows from "./pages/TVShows";
import UserListedMovies from "./pages/UserListedMovies";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./Actions/UserAction";
import ProctedRout from "./components/ProctedRout";
import Loader from "./components/Loader";
export default function App() {
  const {isAuthenticated,loading}=useSelector((state)=>state.profile)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(loadUser())
  }, [])
  
  return (
    <BrowserRouter>
    <Toaster />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/tv" element={<TVShows />} />
        <Route exact path="/movies" element={<MoviePage />} />
        <Route exact path="/new" element={<Player />} />
        <Route exact path="/mylist" element={<UserListedMovies />} />
        <Route exact path="/" element={isAuthenticated?<Netflix />:<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}
