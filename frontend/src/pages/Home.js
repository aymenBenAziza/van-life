import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <div className="home-container mt-5">
                <h1>You got the travel plans, we got the travel vans.</h1>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to="vans">Find your van</Link>
            </div>
            <div className="contact_section layout_padding mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="contact_taital">Contact Us</h1>
                            <p className="contact_text">Thank you for reaching out to us! We value your feedback and inquiries. Our team is dedicated to providing you with exceptional service and assistance. Please feel free to contact us with any questions, concerns, or suggestions you may have. We look forward to hearing from you and will respond promptly to your message. Your satisfaction is our priority.</p>
                        </div>
                    </div>
                    <div className="contact_section_2">
                        <div className="row">
                            <div className="col-md-6 padding15">
                                <form action="https://formspree.io/f/moqzodyj" method="POST">
                                    <div className="mail_section_1">
                                        <input type="email" className="form-control mb-3" placeholder="Email" name="Email" required />
                                        <textarea className="form-control mb-3" placeholder="Message" rows="5" id="comment" name="Message" required></textarea>
                                        <button type="submit" className="btn btn-primary">SEND</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};