import {useState} from "react";
import {useTranslation} from "react-i18next";

export default function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        try {
            await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: new FormData(form),
            });

            setIsSubmitted(true)
            form.reset();
        } catch (err) {
            console.error(err);
        }
    };

    const {t} = useTranslation();
    return (
        <>
            <div className="contact-form-div">
                <h1>Contact me</h1>
                <form onSubmit={handleSubmit}>
                    <div className="contact_inputs">
                        <input type="hidden" name="access_key" value="605a2b99-9c5a-4283-9d11-5e1dabcdf874"/>
                        <input type="text" name="name" placeholder="Your Name" className="name_input" required/>
                        <input type="email" name="email" placeholder="Your Email" className="email_input" required/>
                        <textarea name="message" placeholder="Your Text" className="text_input" rows={5} required/>
                        <button type="submit" className="submit_button">{t("send")}</button>
                    </div>
                </form>
                {isSubmitted &&
                    <p style={{color: 'green', fontWeight: 'bold', marginTop: '10px'}}>{t("thank_you_for_message")}</p>}
            </div>
        </>
    )
}
