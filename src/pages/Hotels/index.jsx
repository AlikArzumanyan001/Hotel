import './style.scss';
import cinqueterre from '../../assets/img/cinqueterre.jpg';
import newyork2 from '../../assets/img/newyork2.jpg';
import sanfran from '../../assets/img/sanfran.jpg';
import pisa from '../../assets/img/pisa.jpg';
import paris from '../../assets/img/paris.jpg';
import useValidation from '../../hook/useValidation';
import { useState } from 'react';

function Hotels(){
    const [reg,setReg] = useValidation()
    const [x,setx] = useState()
    return(
        <div>
            <div className='hotels-container'>
                <div className='hotel-cont-name'>
                    <p className='name'>Our Hotels</p>
                    <p className='text'>You can find our hotels anywhere in the world:</p>
                </div>
                <div className='img-container'>
                    <div className='img-Cinque-Terre'>
                        <img className='img' src={cinqueterre} alt="cinqueterre" />
                        
                    </div>
                    <div className='img-country'>
                        <div className='country'>
                            <img className='imges-count' src={newyork2} alt="New York" />
                            
                        </div>
                        <div className='country'>
                            <img className='imges-count' src={sanfran} alt="San Francisco" />
                            
                        </div>
                        <div className='country'>
                            <img className='imges-count' src={pisa} alt="Pisa" />
                        </div>
                        <div className='country'>
                            <img className='imges-count' src={paris} alt="Paris" />
                        </div>
                    </div>
                </div>
                <div className='email-cont'>
                    <div className='email-container'>
                        <p className='name-email-cont'>Get the best offers first!</p>
                        <p className='text-email-cont'>Join our newsletter.</p>
                    </div>
                    <div className='email'>
                        <p className='email-name'>E-mail</p>
                        <input type="email" placeholder='Your Email address' className='input-email' onChange={(e)=>{
                            setx(e.target.value)
                        }}/>
                        <div className='eror'>{reg}</div>
                        <button className='btn-email' onClick={()=>{
                            setReg(x)
                        }}>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hotels