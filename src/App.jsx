import { Header } from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Adduser from "./components/Adduser";
import Userlist from "./components/Userlist";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/task" element={<Intro />} />
            <Route path="/adduser" element={<Adduser />} />
            <Route path="/userlist" element={<Userlist />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
