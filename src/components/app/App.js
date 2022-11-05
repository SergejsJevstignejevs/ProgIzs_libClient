
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignInPage from "../pages/signInPage/SignInPage";
import SignUpPage from "../pages/signUpPage/SignUpPage";
import './App.scss';


function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<SignInPage/>}/>
            <Route path="/signUp" element={<SignUpPage/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
