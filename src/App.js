import './App.css';
import React from 'react';
// import styled from "styled-components";
import theme from "styled-theming";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import DarkThemeProvider from './DarkThemeProvider';
import DarkThemeToggle from './DarkThemeToggle';
import styled, { ThemeProvider } from "styled-components";

//THEME DEFINITION
export const theme1 = theme("theme", {
  light: '#fff',
  dark: '#2d2d2d',
});

export const theme2 = theme("theme", {
  light: "#000",
  dark: "#fff",

});

const Container = styled.div`
background-color: ${theme1};
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
align-items:center;
justify-content: center;
font-family: sans-serif;
`

const SwitchTheme = styled.div`

display: flex;
height: 75px;
align-items:center;
padding: 0 50px;
justify-content: space-between;
`

const App = () => {
  return (
    <React.Fragment>
      <ReduxProvider store={store}>
        <DarkThemeProvider theme = {{ theme:"light"}} >
          <SwitchTheme>
            <h1> Theme App </h1>
            <p>
              <DarkThemeToggle/>
            </p>
          </SwitchTheme>
          <Container>
            <h2>Welcome!</h2>
            <h3> Full stack web dev</h3>
          </Container>
        </DarkThemeProvider>
      </ReduxProvider> 
    </React.Fragment>
  )
};

export default App;

