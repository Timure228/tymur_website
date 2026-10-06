import {useState} from "react";
import {useTranslation} from "react-i18next";

export default function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("https://formsubmit.co/arductimur@gmail.com", {
            method: "POST",
            body: new FormData(event.target),
            headers: {'Accept': 'application/json'}
        })
            .then(() => setIsSubmitted(true));
    };

    const {t} = useTranslation();
    return (
        <>
            <div className="contact-form-div">
                <h1>Contact me</h1>
                <form onSubmit={handleSubmit}>
                    <div className="contact_inputs">
                        <input type="text" name="name" placeholder="Your Name" className="name_input" required/>
                        <input type="email" name="email" placeholder="Your Email" className="email_input" required/>
                        <textarea name="message" placeholder="Your Text" className="text_input" rows={5} required/>
                        <button type="submit" className="submit_button">{t("send")}</button>
                    </div>
                </form>
                {isSubmitted && <p style={{ color: 'green', fontWeight: 'bold', marginTop: '10px' }}>{t("thank_you_for_message")}</p>}
            </div>
        </>
    )
}