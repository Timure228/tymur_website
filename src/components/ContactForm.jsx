export default function ContactForm() {
    return (
        <>
            <div className="contact-form-div">
                <h1>Contact me</h1>
                <form>
                    <div className="contact_inputs">
                        <input placeholder="Your Name" className="name_input"/>
                        <input placeholder="Your Email" className="email_input"/>
                        <textarea placeholder="Your Text" className="text_input"/>
                        <button className="submit_button" onSubmit={() => {console.log("send")}}>Send</button>
                    </div>
                </form>
            </div>
        </>
    )
}