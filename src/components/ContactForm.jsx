export default function ContactForm() {
    return (
        <>
            <div className="contact-form-div">
                <h1>Contact me</h1>
                <form action="https://formsubmit.co/arductimur@gmail.com" method="POST">
                    <div className="contact_inputs">
                        <input type="text" name="name" placeholder="Your Name" className="name_input" required/>
                        <input type="email" name="email" placeholder="Your Email" className="email_input" required/>
                        <textarea name="message" placeholder="Your Text" className="text_input" rows={5} required/>
                        <button type="submit" className="submit_button">Send</button>
                    </div>
                </form>
            </div>
        </>
    )
}