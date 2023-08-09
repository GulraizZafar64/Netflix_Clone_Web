import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import MoviePage from "./pages/Movies";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";
import Signup from "./pages/Signup";
import TVShows from "./pages/TVShows";
import UserListedMovies from "./pages/UserListedMovies";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, setToken } from "./Actions/UserAction";
import ProctedRout from "./components/ProctedRout";
import Loader from "./components/Loader";
export default function App() {
  const {isAuthenticated,loading}=useSelector((state)=>state.profile)
  const dispatch=useDispatch()
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log(token)
    dispatch(loadUser(token))
      dispatch(setToken(token));
    }
  }, [])


  
  return (
<>

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
      <Route path='/' element={<ProctedRout Component={Netflix} isAuthenticated={isAuthenticated}/>}  />
      {/* <Route exact path="/" element={isAuthenticated?<Netflix />:<Login/>} /> */}
    </Routes>
  </BrowserRouter>

</>
  );
}
