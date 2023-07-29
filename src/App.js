import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import Layout from "./layout";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />}/>
          <Route path="profile" element={<Profile />}/>
        </Routes>
      </Layout>
    </>
  );
};

export default App;
