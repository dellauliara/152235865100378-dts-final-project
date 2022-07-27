import { ThemeProvider } from '@mui/system';
import './App.css';
import theme from "./themes/theme";
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Login  from './containers/Login';
import Register  from './containers/Register';
import { Route, Routes} from "react-router-dom";
import Cuisine from './containers/Cuisine';


function App() {
  return (
    <ThemeProvider theme={theme}>
  <div className="App">
    <Navbar/>

    <Routes>
    <Route path ="/" element={<Home/>}></Route>
    <Route path ="login" element={<Login/>}></Route>
    <Route path ="register" element={<Register/>}></Route>
    <Route path ="cuisine/:type" element={<Cuisine/>}></Route>

    </Routes>
    

    </div>

    </ThemeProvider>
  
  );
}

export default App;
