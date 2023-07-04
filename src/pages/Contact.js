// import Footer from "./Footer";
import Footer2 from "./Footer2";
function Contact() {
    return (
        <div>
        <div className="contact">
            <h1 className="text-center">Love to hear from you, Get in touch 👋</h1>
            <form action="" method="post">
            <label>Your Name</label>
           <input type="text" required></input>
           <label>Your Email</label>
           <input type="email" required></input>
           <label>What your are intrested in?</label>
           <input type="text" required></input>
           <label>Phone Number</label>
           <input type="text"></input>
           <label>Your Message</label>
           <textarea required></textarea>
          <button className="send-msg">Just Send</button>
          </form>
</div>
<Footer2/>
        </div>
    )

}
export default Contact;