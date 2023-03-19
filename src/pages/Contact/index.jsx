import { useState } from 'react';
import useValidation from '../../hook/useValidation';
import './style.scss';

function Contact(){
    const [reg,data,name,setReg] = useValidation()
    const [x,setx] = useState()
    const [y,sety] = useState()
    const [z,setz] = useState()
    const [a,seta] = useState()
    return(
        <div>
            <div className='contact-container' id='Contact'>
                <div className='contact-name'>
                    <p className='name'>Contact</p>
                    <p className='text'>If you have any questions, do not hesitate to ask them.</p>
                </div>
                <div className='icons-geolacation'>
                    <div className='location-cont'>
                        <i className='icon-location' style={{color:"#f44336",marginRight:"10px"}}/>
                        <p className='location'>Chicago, US</p>
                    </div>
                    <div className='phone-cont'>
                        <i className='icon-phone' style={{color:"#f44336",marginRight:"10px"}}/>
                        <p className='phone'> Phone: +00 151515</p>
                    </div>
                    <div className='email-cont'>
                        <i className='icon-envelope' style={{color:"#f44336",marginRight:"10px"}}/>
                        <p className='email'>Email: mail@mail.com</p>
                    </div>
                </div>
                <div className='input-container'>
                    <div className='inp-name'>
                        <input type="text" placeholder='Name' className='input-name' onChange={(e)=>{
                            setz(e.target.value)
                            seta(e.target.type)
                        }}/>
                        <div className='eror'>{name}</div>
                    </div>
                    <div className='inp-email'>
                        <input type="email" placeholder='Email' className='input-email' onChange={(e)=>{
                            setx(e.target.value)
                            sety(e.target.type)
                        }}/>
                        <div className='eror'>{reg}</div>
                    </div>
                    <div className='inp-message'>
                        <input type="message" placeholder='Message' className='input-message'/>
                    </div>
                    <button className='btn-validation' onClick={()=>{
                        setReg(x,y)
                        setReg(z,a)
                    }}>SEND MESSAGE</button>
                </div>
            </div>
        </div>
    )
}
export default Contact