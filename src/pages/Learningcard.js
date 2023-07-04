import Dsa from '../images/DSA.webp'
function Learningcard() {
    return (
        <div className="l-card">
            <img src={Dsa} className='dsa-card' alt=''></img>
            <div className='p-3'>
           <h5 className='cut'>₹7800</h5>
           <h2>₹6300</h2>
           <p>or EMI ₹1050/mon*</p>
           <a href='/notfound'><button className='card-btn'>Start Learning</button></a>
           <p><i class="bi bi-camera-video"></i> 30+ Hrs LIVE Problem Solving Classes</p>
           <p><i class="bi bi-skip-end-circle"></i> 60+ Hrs Online Content</p>
           <p><i class="bi bi-code-slash"></i> 400+ Handpicked Problems</p>
           <p> 5 Months Program</p>
           <p><i class="bi bi-stopwatch"></i> 2 Years Access</p>
           </div>

        </div>
    )

}
export default Learningcard;
