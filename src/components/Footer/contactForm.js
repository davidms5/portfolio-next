import { useState } from "react";

const ContactForm = () => {

    const [contactForm, setContactForm] = useState({
        Name: "",
        email: "",
        message: "",
        //poner otro campo tipo where did you hear about us?
    });

    const handleSubmit = () => {
        console.log("prueba")
    };

    return (
        <>
        <h1>hola mundo</h1>
        <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={contactForm.Name} onChange={(e) => setContactForm(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={contactForm.email} onChange={(e) => setContactForm(e.target.value)} />
      </label>
      <label>
        Message:
        <textarea value={contactForm.message} onChange={(e) => setContactForm(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
         </form>
        </>
    )
}

export default ContactForm;