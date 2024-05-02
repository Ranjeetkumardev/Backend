import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Dashaboard from "./Components/Dashboard";
import Header from "./Components/Header";
import NoutFound from "./Components/NoutFound";

//import ProtectedRoute from "./Components/ProtectedRoute";
function App() {
  const token = localStorage.getItem("token");
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/about" element={token ? <About /> : <Login />} />
        <Route
          exact
          path="/contact"
          element={token ? <Contact /> : <Login />}
        />
        <Route
          exact
          path="/service"
          element={token ? <Services /> : <Login />}
        />
        <Route exact path="/" element={token ? <Hero /> : <Login />} />

        <Route
          exact
          path="/dashaboard"
          element={token ? <Dashaboard /> : <Login />}
        />
        <Route path="/:abcd" element={<NoutFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
