import Navbar from "./components/NavBar/Navbar"
import IntroDiv from "./components/LandingPage/IntroDiv"
import OurOfferings from "./components/LandingPage/OurOfferings"
import WhyUs from "./components/LandingPage/WhyUs"
import Appriciation from "./components/LandingPage/Appriciation"

const LandingPage = () => {
  return (
    <>
        <Navbar/>
        <IntroDiv/>
        <OurOfferings/>
        <WhyUs/>
        <Appriciation/>
    </>
  )
}

export default LandingPage