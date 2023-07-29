import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import Layout from "./layout";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Private from "./auth";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />}/>
          <Route path="profile" element={<Private><Profile /></Private>}/>
        </Routes>
      </Layout>
    </>
  );
};

export default App;
