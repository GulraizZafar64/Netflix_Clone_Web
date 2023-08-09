import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import background from "../assets/login.jpg";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, loadUser } from "../Actions/UserAction";
import { baseUrl } from "../Config/config";
import { toast } from "react-hot-toast";
import Loader from "../components/Loader";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const {isAuthenticated,error}=useSelector((state)=>state.user)
  const {loading,isAuthenticated:profileAuth}=useSelector((state)=>state.profile)
  

  const handleLogin = async () => {
    dispatch(LoginUser(email,password))
  };

  useEffect(() => {
    if(error){
      toast.error(error.message)
      dispatch({type:"clearError"})
    }
    if(isAuthenticated){
      navigate('/')
    }
  }, [error])
  useEffect(() => {
    if(profileAuth){
      navigate('/')
    }else{
      navigate('/login')

    }
  }, [profileAuth])



  return (
    loading? <Loader/>:
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button disabled={loading} onClick={handleLogin}>Login to your account</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;

export default Login;
