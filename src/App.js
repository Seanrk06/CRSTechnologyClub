import './App.css';
// import logo from './logo.svg';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Home from "./pages/Home"
import PageNotFound from './pages/404';
import Test from './pages/Test';
import CalenderPage1 from './pages/calenderpages/CalenderPage1';
import CalenderPage2 from './pages/calenderpages/CalenderPage2';
import CalenderPage3 from './pages/calenderpages/CalenderPage3';
import CalenderPage4 from './pages/calenderpages/CalenderPage4';
import CalenderPage5 from './pages/calenderpages/CalenderPage5';
import PastPresenters from './pages/PastPresenters';
import FAQ from './pages/FAQ';
import CurrentPresenter from './pages/CurrentPresenter';
import JoinEmailList from './pages/JoinEmailList';
import ContactUs from './pages/ContactUs';
import JoinCanvasPage from './pages/JoinOurCanvas';


export default function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/"  element ={<Home/>}/>

          <Route exact path="/calender1"  element ={<CalenderPage1/>}/>
          <Route exact path="/calender2"  element ={<CalenderPage2/>}/>
          <Route exact path="/calender3"  element ={<CalenderPage3/>}/>
          <Route exact path="/calender4"  element ={<CalenderPage4/>}/>
          <Route exact path="/calender5"  element ={<CalenderPage5/>}/>
          <Route exact path="/pastpresenters"  element ={<PastPresenters/>}/>
          <Route exact path="/FAQ" element={<FAQ/>} />
          <Route exact path="/404" element={<PageNotFound/>} />
          <Route exact path="*" element={<PageNotFound/>} />
          <Route exact path="/CurrentPresenter" element={<CurrentPresenter/>} />
          <Route exact path="/ContactUs" element={<ContactUs/>} />
          <Route exact path="/JoinEmailList" element={<JoinEmailList/>} />
          <Route exact path="/JoinCanvasPage" element={<JoinCanvasPage/>} />
          <Route exact path="/test"  element ={<Test/>}/>
        </Routes>
    </Router>
  );
}
