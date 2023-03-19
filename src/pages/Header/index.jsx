import './style.scss';

function Header(){
    return(
        <div className='header-btn-cont'>
            <div className='container-btn'>
                <div className='logo-btn-cont'>
                    <i className='icon-hotel'/>
                    <a href='#' className='Logo-btn'>Logo</a>
                </div>
                    <a href='#Rooms' className='Rooms-btn'>Rooms</a>
                    <a href='#About' className='About-btn'>About</a>
                    <a href='#Contact' className='Contact-btn'>Contact</a>
            </div>
            <div className='book-cont'>
                <a href='#Contact' className='Book-btn'>Book Now</a>
            </div>
        </div>
    )
}
export default Header