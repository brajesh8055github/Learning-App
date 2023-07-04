import anuj from '../images/Anujpic.jpg'
function Founder() {
    return (
        <div className="founder">
            <div className="top">
                <h6 className='text-success'>GREETINGS</h6>
                <h1>👋 From The <span>Founder</span></h1>
            </div>
            <div className="f-col">
                <div className="f-row">
                    <img src={anuj} alt='' className='f-img'></img>
                </div>
                <div className="f-row">
                    <p>Hello Everyone, I understand that there is an overwhelming number of online courses, tutorials, and books out there. There are some great ones. But most of them are outdated, overly complicated, and don't teach proper skills. Most people feel paralyzed and don't know where to start when learning complex topics and many don't have 3 Lakhs Rupees to spend on a coding boot camp. Programming & tech skills should be affordable and open to all. And educational materials should teach real-life skills that are current and not waste your valuable time. This has been our mission from Day 1 and this is what Coding Shuttle is all about.<br></br><br></br>A lot of students around the world have taken our previous courses and many of them are now working in their dream job at companies like Microsoft, Google, Amazon, Atlassian just to name a few.
                    </p><br></br>
                    <p>You can too.</p><br></br>
                    <p>See you inside,</p>
                    <p>Anuj</p>
                    <p>Founder of Coding Shuttle</p>
                </div>
            </div>

        </div>
    )

}
export default Founder;