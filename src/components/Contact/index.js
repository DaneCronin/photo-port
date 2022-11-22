import React, {useState} from 'react';

//Contact Form Function

function ContactForm() {
    const { name, email, message} = formState;
    const [formState, setFormState] = useState({name: '', email: '', message: ''});

    //Function to handle keystrokes into NAME, EMAIL and MESSAGE input fields
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value})
    }


    //function to handle submit button 
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }


    return (
        <section>
            <h1> Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue= {name} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue= {email} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>

                <buton type="submit">Submit</buton>
            </form>
        </section>
    )

}

export default ContactForm;