import "./ContactFormStyle.css";
import {useRef} from "react";
import emailjs from '@emailjs/browser';
const ContactForm = () =>{
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9myp9pp', 'template_gh8scpi', form.current, '8kIB2tUjp8sonpoI5')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    return(
      
        <div className="form-container">
            <h1>Share your interests with us!</h1>
            <form ref={form} onSubmit={sendEmail}>
                <input placeholder="Name" name="user_name" required/>
                <input placeholder="Email" name="user_email" required/>
                <input placeholder="Subject" name="subject" required/>
                <textarea name="message" placeholder="Message" rows="4"></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
        );}
export default ContactForm;