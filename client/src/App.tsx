import Navbar from "./components/Navbar";
import SocialNetworkBar from "./components/SocialNetworkBar";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <GlobalStyle />

      <SocialNetworkBar />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
