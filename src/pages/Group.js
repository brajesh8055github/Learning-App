import comunity from '../images/comunity.webp'

function Group() {
    return (
        <div className="group">
            <div className='f-row'>
                <h1>Learn & Grow with a community of learners just like you!</h1>
                <p>Join our Supportive Discord Community for Regular Webinars from Industry Experts and grow together as a Community ❤️</p>
                <a href="https://discord.com/invite/eXh7mjRq4W" target="_blank" rel="noreferrer"><button className="join"><i class="bi bi-discord"></i> Join Our Discord</button></a>
            </div>
            <div className='f-row'>
                <img src={comunity} alt='' className='c-img'></img>
            </div>
        </div>
    )

}
export default Group;