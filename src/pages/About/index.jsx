import './style.scss';
import map from '../../assets/img/map.jpg';
function About(){
    return(
        <div>
            <div className='about' id='About'>
                <div className='about-container'>
                    <p className='name'>About</p>
                    <h6 className='text'>Our hotel is one of a kind. It is truely amazing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h6>
                    <div className='card-cont'>
                        <p className='name-cards'>We accept:</p>
                        <i className='icon-credit-card' style={{marginRight:"5px"}}/>
                        <i className='icon-cc-mastercard' style={{marginRight:"5px"}}/>
                        <i className='icon-cc-amex' style={{marginRight:"5px"}}/>
                        <i className='icon-cc-paypal'/>
                    </div>
                </div>
                <div className='img-map'>
                    <img className='map' src={map} alt="map" />
                </div>
            </div>
            <div className='geolocation-cont'>
                <div className='geolocation'>
                    <i className='icon-location' style={{color:"#f44336",marginRight:"5px"}}/>
                    423 Some adr, Chicago, US
                </div>
                <div className='phone'>
                    <i className='icon-phone' style={{color:"#f44336",marginRight:"5px"}}/>
                    Phone: +00 151515
                </div>
                <div className='email'>
                    <i className='icon-envelope' style={{color:"#f44336",marginRight:"5px"}}/>
                    Email: mail@mail.com
                </div>
            </div>
            <div className='info-panel'>
                <i className='icon-info'/>
                <p className='text'>On demand, we can offer playstation, babycall, children care, dog equipment, etc.</p>
            </div>
        </div>
    )
}
export default About