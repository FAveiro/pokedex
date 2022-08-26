import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Containers/App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const pokedexClient = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={pokedexClient}>
    <App />
  </ApolloProvider>
);
