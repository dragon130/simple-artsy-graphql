import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://metaphysics-production.artsy.net/",
  cache: new InMemoryCache({ addTypename: false })
});
