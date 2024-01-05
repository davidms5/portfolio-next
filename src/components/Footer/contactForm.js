import { useState } from "react";
import { SectionTitle } from "@/styles/GlobalComponents";
import { ButtonForm, ContactMeContainer } from "./FooterStyles";
const ContactForm = () => {

    const [contactForm, setContactForm] = useState({
        Name: "",
        email: "",
        message: "",
        //poner otro campo tipo where did you hear about us?
    });

    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleEmailChange = (e) => {

      const inputEmail = e.target.value;

      setContactForm(prevValue => ({...prevValue, email: inputEmail}));
      // Custom email validation logic
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValidEmail(emailRegex.test(inputEmail));
    };
  

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!isValidEmail) {
          console.log('Invalid email. Please enter a valid email address.');
          return;
        }
        console.log("prueba")
    };

    return (
      <div style={{display: "flex", alignItems:"center", justifyContent: "center"}}>
        <ContactMeContainer>
        <SectionTitle id='contact'>contact me</SectionTitle>
        <form style={{display:"flex", flexDirection: "column"}} onSubmit={handleSubmit}>
        {/*arreglar el tema de width aqui */}
          <div style={{display: "flex", marginBottom: "20px"}}>
      <label>
        Name:
        </label>
        <input style={{marginRight:"10px"}} type="text" value={contactForm.Name} onChange={(e) => setContactForm(e.target.value)} />
      
      
      <label>
        Email:
        </label>
        <input type="email" value={contactForm.email} onChange={handleEmailChange} style={{ borderColor: isValidEmail ? 'initial' : 'red' }} />
      
        </div>
      <label>
        Message:
        </label>
        <textarea style={{width:"100%", boxSizing: "border-box", padding: "10px", height: "100px"}} value={contactForm.message} onChange={(e) => setContactForm(e.target.value)} />
      
      <br/>
      {!isValidEmail && <p style={{ color: 'red' }}>Invalid email. Please enter a valid email address.</p>}
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px"}}>

      
      <br/>
      <ButtonForm type="submit">Submit</ButtonForm>
      </div>
         </form>
        </ContactMeContainer>

        </div>
    )
}

export default ContactForm;