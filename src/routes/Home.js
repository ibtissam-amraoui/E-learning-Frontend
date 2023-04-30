import Navbar from "../components/Navbar";
import Why from "../components/Why";
import Benifits from "../components/Benifits";
import HomeVid from "../assets/HomeVid.mp4";
import Benif from "../components/Benif"
import HeroVid from "../components/HeroVid";
import Footer from '../components/Footer';
function Home(){
    return(
    <>
       <Navbar/>
       <HeroVid
       name="hero"
       heroVid={HomeVid}
       tit="Welcome to IBRA"
       para="Your bridge to success"
     />
      <Why/>
      <Benif/>
      <Benifits/> 
      <Footer /> 
    </>
    );
}
export default Home;