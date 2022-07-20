import React, { useEffect, useState } from "react";
import MainLoading from "./MainLoading";
import {
  LoginBox,
  LoginIdInput,
  LoginIdLabel,
  LoginImg,
  LoginSignUpButton,
  LoginLoginButton,
  LoginPasswordInput,
  LoginPasswordLabel,
  LoginSubmitButton,
  LoginAnotherLine,
  LoginAnother,
  LoginAnotherTitle,
  LoginAnotherButton,
  LoginAnotherButtonBox,
} from "./styledComponent";

const Login = () => {
  const [loadingTimer, setLoadingTimer] = useState(true);
  const [loginState, setLoginState] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingTimer(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const loginButtonOnClick = () => {
    if (loginState === false) {
      setLoginState(true);
    }
  };
  const signUpButtonOnClick = () => {
    if (loginState === true) {
      setLoginState(false);
    }
  };

  return (
    <>
      {loadingTimer === true ? (
        <MainLoading />
      ) : (
        <>
          <LoginImg src="/img/logo.png" />
          <LoginBox>
            <LoginSignUpButton
              onClick={signUpButtonOnClick}
              loginState={loginState}
            >
              회원가입
            </LoginSignUpButton>
            <LoginLoginButton
              onClick={loginButtonOnClick}
              loginState={loginState}
            >
              로그인
            </LoginLoginButton>
            {loginState === true ? (
              <>
                <LoginIdLabel>아이디</LoginIdLabel>
                <LoginIdInput type="text" name="id" />
                <LoginPasswordLabel>비밀번호</LoginPasswordLabel>
                <LoginPasswordInput type="password" name="password" />
                <LoginSubmitButton>로그인</LoginSubmitButton>
                <LoginAnother>
                  <LoginAnotherLine />
                  <LoginAnotherTitle>
                    <span>다른 서비스로 로그인</span>
                  </LoginAnotherTitle>
                </LoginAnother>
                <LoginAnotherButtonBox>
                  <LoginAnotherButton img="/img/naverLogin.png" />
                  <LoginAnotherButton img="/img/googleLogin.png" />
                </LoginAnotherButtonBox>
              </>
            ) : (
              <></>
            )}
          </LoginBox>
        </>
      )}
    </>
  );
};

export default Login;
