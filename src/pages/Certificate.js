// import Footer from "./Footer";
// import Footer2 from "./Footer2";
import degree from '../images/anujcertificate.png'

function certificate() {
    return (
        <div className="certificate">
                {/* <h4 className='batch'>TOP QUALITY CURRICULUM</h4> */}

        <div className="certi-body">
            <div className='f-row'>
                <div className='batch'>
                    <i class="bi bi-patch-check"></i>
                <h4>TOP QUALITY CURRICULUM</h4>
                </div>
           <h1>Official and Verified Certificate of Completion</h1>
           <p>Add the certificate to your CV or your resume or post it directly on Linkedin to enhance your professional credibility.</p>
           </div>
           <div className='f-row'>
            <img src={degree} alt='' className='c-img'></img>
           </div>
           </div>
            {/* <Footer2/> */}
        </div>
    )

}
export default certificate;