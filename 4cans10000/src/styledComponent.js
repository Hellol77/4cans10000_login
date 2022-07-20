import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: rows;
  margin: 2rem;
  width: 100%;
  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const NavTitle = styled.div`
  margin-left: 1.5rem;
`;

export const NavMenuBar = styled.div`
  font-size: 30px;
  margin-right: 1.5rem;
`;

export const MainLoadingImg = styled.img`
  margin-top: 4rem;
  width: 18rem;
  height: 21rem;
`;

export const MainLoadingText = styled.div`
  margin-top: 3rem;
  background-color: rgb(253 215 77);
  color: rgb(48 23 23);
  align-items: center;
  justify-content: center;
  display: flex;
  width: 15rem;
  height: 2rem;
  border-radius: 10px;
  font-weight: bold;
`;

export const LoginBox = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  width: 20rem;
  height: 28rem;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: white;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const LoginIdLabel = styled.label`
  font-size: 12px;
`;

export const LoginPasswordLabel = styled.label`
  font-size: 12px;
`;

export const LoginIdInput = styled.input`
  outline: none;
  padding: 5px 0px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1.8rem;
`;

export const LoginPasswordInput = styled.input`
  outline: none;
  padding: 5px 0px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  margin-bottom: 3rem;
`;

export const LoginSubmitButton = styled.button`
  background-color: rgb(170 232 190);
  width: 100%;
  height: 2.5rem;
  border: none;
  border-radius: 15px;
  color: black;
  font-size: 18px;
  margin-bottom: 50px;
`;

export const LoginSignUpButton = styled.button`
  width: 50%;
  height: 2rem;
  background-color: white;
  color: ${(props) =>
    props.loginState ? "rgb(113 112 112)" : "rgb(111 232 151)"};
  border: none;
  border-bottom: 3px solid
    ${(props) => (props.loginState ? "rgb(113 112 112)" : "rgb(111 232 151)")};
  margin-bottom: 2rem;
  font-size: 15px;
`;
export const LoginLoginButton = styled.button`
  width: 50%;
  height: 2rem;
  background-color: white;
  color: ${(props) =>
    props.loginState ? "rgb(111 232 151)" : "rgb(113 112 112)"};
  border: none;
  border-bottom: 3px solid
    ${(props) => (props.loginState ? "rgb(111 232 151)" : "rgb(113 112 112)")};
  font-size: 15px;
`;

export const LoginImg = styled.img`
  width: 7rem;
`;

export const LoginAnother = styled.div`
  position: relative;
  margin-bottom: 20px;
`;
export const LoginAnotherLine = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  height: 1px;
  background-color: #ddd;
  z-index: -1;
`;

export const LoginAnotherTitle = styled.div`
  width: 110px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  text-align: center;
  color: rgb(113 112 112);
  font-size: 9px;
`;
export const LoginAnotherButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const LoginAnotherButton = styled.button`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: url(${(props)=>props.img});
  background-position: center;
  background-size: contain;
  border: none;
  background-repeat: no-repeat;
`;
