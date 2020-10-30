import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styled/GlobalStyle.js";
import Header from "./components/Header";
import * as theme from "./styled/theme";
import { BrowserRouter, Route } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import MainContext from "./context";
import AddAdv from "./components/AddAdv";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

export default () => {
  return (
    <ApolloProvider client={client}>
      <MainContext>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <Route exact path="/">
              <Mainpage />
            </Route>
            <Route path="/gelinlikler" component={AddAdv} />
          </ThemeProvider>
        </BrowserRouter>
      </MainContext>
    </ApolloProvider>
  );
};
