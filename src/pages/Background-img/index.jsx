import './style.scss';
import Hotel from '../../assets/img/hotel.jpg'
import useValidation from '../../hook/useValidation';
import { useState } from 'react';
function Background(){
    const [reg,data,name,setReg] = useValidation()
    const [x,setx] = useState()
    const [y,sety] = useState()
    const [z,setz] = useState()
    const [a,seta] = useState()
    return(
        <div>
            <div>
                <img className='img' src={Hotel} alt="Hotel" />
                <div className='Hotel-name-container'>
                    <h2 className='Hotel-name'>
                        <i className='icon-hotel'/>
                        <p className='name'>Hotel Name</p>
                    </h2>
                    <div className='Hotel-check-in'>
                        <div className='icon-input-cont'>
                            <label className='icons'>
                                <i className='icon-calendar-o'/>
                                <p className='icon-name'>Check In</p>
                            </label>
                            <div className='input-cont'>
                                <input type="date" className='input' placeholder='DD MM YYYY' onChange={(e)=>{
                                    setx(e.target.value)
                                    sety(e.target.type)
                                }}/>
                                <div className='eror'>{data}</div>
                            </div>
                        </div>
                        <div className='icon-input-cont'>
                            <label className='icons'>
                                <i className='icon-calendar-o'/>
                                <p className='icon-name'>Check Out</p>
                            </label>
                            <div className='input-cont2'>
                                <input type="date" className='input' placeholder='DD MM YYYY' onChange={(e)=>{
                                    setz(e.target.value)
                                    seta(e.target.type)
                                }}/>
                                <div className='eror'>{data}</div>
                            </div>
                        </div>
                    </div>
                    <div className='Hotel-adults'>
                        <div className='icon-input-cont'>
                            <label className='icons'>
                                <i className='icon-male'/>
                                <p className='icon-name'>Adults</p>
                            </label>
                            <div className='input-cont'>
                                <input className='input' type="number" min="1" max="6"/>
                            </div>
                        </div>
                        <div className='icon-input-cont'>
                            <label className='icons'>
                                <i className='icon-child'/>
                                <p className='icon-name'>Kids</p>
                            </label>
                            <div className='input-cont2'>
                                <input type="number" className='input' min="0" max="6"/>
                            </div>
                        </div>
                    </div>
                    <div className='search-btn-cont'>
                        <div className='btn-cont'>
                           <button className='btn' onClick={()=>{
                                setReg(x,y)
                                setReg(z,a)
                           }}>
                            <i className='icon-search'/>
                            Search availability
                           </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Background