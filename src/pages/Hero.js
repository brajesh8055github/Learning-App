import anuj from '../images/Anujpic.jpg'
function Hero(){
    return(
        <div className="hero hero-flex">
            <div className='f-row'>
            <h1><span>DSA Prime</span> Program is now Open for Enrollments</h1>
            <p>A Program to make you Job Ready for<br></br> your Dream Company 🚀</p>
            <a href='/notfound'><button className="enroll">Enroll Now <i class="bi bi-arrow-right"></i></button></a>
            <p>This batch starts from 30th July</p>
            <div className="border">
                <div>
                <h4>1000+</h4>
                <p>Success Stories</p>
                </div>
                <div>
                <h4>120+</h4>
                <p>Companies Hired</p>
                </div>
                <div>
                <h4>40LPA</h4>
                <p>Highest Package</p>
                </div>
                </div>
            </div>
            <div className='f-row'>
                <img src={anuj} alt='' className='hero-img'></img>
            </div>
        </div>
    )

}
export default Hero;