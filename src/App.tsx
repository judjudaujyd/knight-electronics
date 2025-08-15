import { Route,Routes ,BrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";

const App = () => {
  return(
    <>

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;