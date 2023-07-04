import Overview from './Overview'
import Hero from './Hero'
import Testinomial from './Testinomial'
import Curriculum from './Currilium'
import Founder from './Founder'
import Group from './Group'
import Review from './Review';
import Footer from './Footer';
import Certificate from './Certificate';
import Faqs from './Faqs'
function Home() {
    return (
        // <div className="hero">
        <div>
            <div className='chat'>
           <a href='https://web.whatsapp.com/' target='_blank' rel='noreferrer'><i class="bi bi-whatsapp"></i></a>
            </div>
        <div className="home">
            
            <Hero />
            <Overview />
            <Testinomial />
            <Curriculum />
            <Certificate/>
            <Founder />
            <Faqs/>
            <Group />
            <Review />
            <Footer />
           </div>
        </div>
    )

}
export default Home;