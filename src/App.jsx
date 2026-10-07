import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import Profile from "./components/ProfileComp";
import SlidingTest from "./components/SlidingTest";
import ColorPicker from "./components/ColorPicker";

import "./css/chongday1.css";

// This is the main function of the component
function App() {
  return (
    <>
      <Header />
      <Welcome name="YA. Chong" />
      <Profile />
      <SlidingTest />
      <ColorPicker />
      <Footer />
    </>
  );
}

export default App;
