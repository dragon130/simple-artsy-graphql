import { ApolloProvider } from "@apollo/client";
import { client } from "./client";
import "./App.css";
import Artists from "./pages/Artists";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="artist-page-container font-family">
        <Artists />
      </div>
    </ApolloProvider>
  );
}

export default App;
