import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LocalUserLogin from "./components/LocalUserLogin";
import InternationalUserLogin from "./components/InternationalUserLogin";
import LocalUserRegister from "./components/LocalUserRegister";
import InternationalUserRegistern from "./components/InternationalUserRegister";
import LiveStreaming from "./components/LiveStreaming";
import Rewatchgame from "./components/Rewatchgame";
import { AboutUs } from "./components/AboutUs";
import PrivateRoute from "./components/PrivateRoute";
import WatchRewatchGame from "./components/WatchRewatchGame";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<LiveStreaming />} />

        <Route path="/rewatchgame" element={<Rewatchgame />} />
      </Route>
      <Route path="/private-route" element={<PrivateRoute />} />
      <Route path="/watchRewatchgame" element={<WatchRewatchGame />} />
      <Route path="/local-user-login" element={<LocalUserLogin />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route
        path="/international-user-login"
        element={<InternationalUserLogin />}
      />
      <Route path="/local-user-register" element={<LocalUserRegister />} />
      <Route
        path="/international-user-register"
        element={<InternationalUserRegistern />}
      />
    </Routes>
  );
}

export default App;
