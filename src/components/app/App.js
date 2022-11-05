
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignInPage from "../pages/signInPage/SignInPage";
import SignUpPage from "../pages/signUpPage/SignUpPage";
import MainPage from "../pages/mainPage/MainPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import './App.scss';


function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<SignInPage/>}/>
            <Route path="/signUp" element={<SignUpPage/>}/>
            <Route path="/main" element={<MainPage/>} />
            <Route path="/error" element={<ErrorPage/>} />
            <Route path="*" element={<ErrorPage/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
