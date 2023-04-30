import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Story from "../components/Story";
import EduTeam from "../components/EduTeam";
import Footer from '../components/Footer';
function About(){
    return(<>
   <Navbar/>
       <HeroImg
       name="hero-mid"
       heroImg="https://images.pexels.com/photos/4260482/pexels-photo-4260482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       tit="With IBRA"
       para="Your learning journey never ends"
       />
       <Story/>
       <EduTeam/>
       <Footer /> 
</>
      );
}
export default About;