// import Footer from "./Footer";
import Footer2 from "./Footer2";
import Review from "./Review";

function About() {
    return (
        // <div className="hero">
        <div>
        <div className="about">

            <div className="about-hero">
            <h1>A platform for the next <br></br>generation of learners!</h1>
            <p>Unleash Your Inner Coding Superhero and Land Your Dream Job!</p>
            <button className="footer-apply">START LEARNING</button><br></br><br></br>
            </div>
            </div>
            <div className="condition">
            <h2>What is Coding Shuttle?</h2>
            <p>Coding Shuttle is an online transformative upskilling platform for college students as well as the working tech professionals. We are devoted to creating an ecosystem that nurtures our learners and assists them in unlocking talent, skills & opportunities at every stage of their careers. Learners enrolled with us are taught, guided, and mentored to excel in the tech interviews. Our team of instructors and mentors is committed to providing an exceptional learning experience that prepares students for success in the fast-paced and ever-changing world of technology. Join us at Coding Shuttle and take the first step towards achieving your coding and career goals. Let us help you unlock your full potential and launch your tech career today!</p>
            <h2>Meet the Founder - Mr. Anuj Kumar Sharma</h2>
            <p>Anuj is a Software Engineer and has worked with Top Product based companies like Amazon and Urban Company in the past. He manages his personal YouTube channel named Anuj Bhaiya with a subscriber base of more than 4 Lakh students. After leaving his job at Amazon, Anuj has devoted his life to helping students to learn coding. "Anyone can learn how to code with the right training and support. That's why I created Coding Shuttle to provide comprehensive programs designed to help students at all levels of expertise, from complete beginners to advanced coders looking to enhance their skills." - from Anuj</p>
            </div>
            <Review />
            <Footer2/>
        
        </div>
    )

}
export default About;