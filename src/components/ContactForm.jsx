export default function ContactForm() {
    return (
        <>
            <div className="contact-form-div">
                <form>
                    <label htmlFor="name_input">Name:</label>
                    <input placeholder="Name" className="name_input" />
                </form>
            </div>
        </>
    )
}