import './style.scss';

function Footer(){
    return(
        <div>
            <div className='footer-cont'>
                <div className='names'>
                    <p className='find'>Find Us On</p>
                </div>
                <div className='icons-mysite'>
                    <a href=""><i className='icon-facebook-square' style={{marginRight:"5px",fontSize:"25px"}}/></a>
                    <a href=""><i className='icon-instagram' style={{marginRight:"5px",fontSize:"24px"}}/></a>
                    <a href=""><i className='icon-snapchat' style={{marginRight:"5px",fontSize:"25px"}}/></a>
                    <a href=""><i className='icon-pinterest' style={{marginRight:"5px",fontSize:"25px"}}/></a>
                    <a href=""><i className='icon-twitter' style={{marginRight:"5px",fontSize:"25px"}}/></a>
                    <a href=""><i className='icon-linkedin' style={{marginRight:"5px",fontSize:"25px"}}/></a>
                </div>
                <div className='w3schools'>
                    <p className='w3css'>Powered by <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a></p>
                </div>
            </div>
        </div>
    )
}
export default Footer