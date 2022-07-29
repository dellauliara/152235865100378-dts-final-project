import { ThemeProvider } from "@mui/system";
import "./App.css";
import theme from "./themes/theme";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import { Route, Routes } from "react-router-dom";
import Type from "./containers/Type";
import Searched from "./containers/Searched";
import Detail from "./containers/Detail";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route
              path="/"
              element={
                <ProtectedRoute loginOnly={false}>
                  <Home />
                </ProtectedRoute>
              }
            />
            </Route>
            <Route
            path="login"
            element={
              <ProtectedRoute loginOnly={false}>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="register"
            element={
              <ProtectedRoute loginOnly={false}>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route path="type/:type" element={<Type />}></Route>
          <Route
            path="searched/:search"
            element={
              <ProtectedRoute loginOnly={false}>
                <Searched />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/detail/:name"
            element={
              <ProtectedRoute loginOnly={true}>
                <Detail />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
