import { ThemeProvider } from '@mui/system';
import './App.css';
import theme from "./themes/theme";
import Navbar from './components/Navbar';
import Home from './containers/Home';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';


function App() {
  return (
    <ThemeProvider theme={theme}>
  <div className="App">
    <Navbar/>
      <Home/>

    </div>

    </ThemeProvider>
  
  );
}

export default App;
