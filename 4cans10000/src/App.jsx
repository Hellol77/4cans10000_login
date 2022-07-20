import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Nav from "./Nav";
import { MainDiv } from "./styledComponent";
import { GlobalStyle } from "./styles";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainDiv>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </MainDiv>
    </>
  );
};

export default App;
