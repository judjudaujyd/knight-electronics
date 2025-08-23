import Appriciation from "./LandingPage/Appriciation"
import IntroDiv from "./LandingPage/IntroDiv"
import OurOfferings from "./LandingPage/OurOfferings"
import WhyUs from "./LandingPage/WhyUs"
import Navbar from "./NavBar/Navbar"


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