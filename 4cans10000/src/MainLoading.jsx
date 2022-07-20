import React from "react";
import { MainLoadingImg, MainLoadingText } from "./styledComponent";
const MainLoading = () => {
  return (
    <>
      <MainLoadingImg src="/img/beer-can.png" />
      <MainLoadingText>편의점 맥주의 모든 것!</MainLoadingText>
    </>
  );
};

export default MainLoading;
