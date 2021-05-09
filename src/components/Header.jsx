import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/counter/user/userSlice";
import { useHistory } from "react-router-dom";
function Header() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const UserPhoto = useSelector(selectUserPhoto);
  const history = useHistory();
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/home");
      }
    });
  }, []);
  const SignIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLoginDetails({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history.push("/home");
    });
  };
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOutState());
      history.push("/");
    });
  };
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      {!userName ? (
        <LoginContainer>
          <Login onClick={SignIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src="/images/home-icon.svg" alt="" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" alt="" />
              <span>Search</span>
            </a>
            <a>
              <img src="images/watchlist-icon.svg" alt="" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg onClick={signOut} src={UserPhoto} alt="" />
        </>
      )}
    </Nav>
  );
}
export default Header;
const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// Logo
const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img {
      display: block;
      width: 100%;
    }
  }
`;
//Login
const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 10px 18px;
  border-radius: 5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  transition: all 0.5s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
    transform: scale(1.025) translateY(-10px);
  }
`;

//Login Container
const LoginContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

//NavMenu
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        right: 0;
        left: 0;
        bottom: -5px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: center;
        transition: all 0.5s cubic-bezier(0.25, 0.45, 0.46, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
    @media (max-width: 768px) {
      float: none;
      width: 100%;
    }
  }
`;
const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
