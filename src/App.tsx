import { Route,Routes ,BrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignUp from "./SignOptions/SignUp/SignUp";

const App = () => {
  return(
    <>

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;