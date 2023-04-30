import Navbar from '../components/Navbar';
 import HeroImg from "../components/HeroImg";
 import ContactForm from "../components/ContactForm";
 import Footer from "../components/Footer";
function Contact(){
    return(
        <>
       <Navbar/>
       <HeroImg
       name="hero-mid"
       heroImg="https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       tit="Contact"
       />
       <ContactForm/>
       <Footer/>
        </>
    )
}
export default Contact;