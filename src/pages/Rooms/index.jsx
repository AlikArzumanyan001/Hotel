import { useState } from 'react';
import Room from '../../components/Room';
import './style.scss';
import room_single from '../../assets/img/room_single.jpg';
import room_double from '../../assets/img/room_double.jpg';
import room_deluxe from '../../assets/img/room_deluxe.jpg';
import useValidation from '../../hook/useValidation';

function Rooms(){
    const [room,setRoom] = useState([
        {
            id:1,
            img: room_single,
            name:"Single Room",
            mon:"From $99",
            info:"Single bed",
            m2:"15m2",
            icon1:"icon-bath",
            icon2:"icon-phone",
            icon3:"icon-wifi"
        },
        {
            id:2,
            img:room_double,
            name:"Double Room",
            mon:"From $149",
            info:"Queen-size bed",
            m2:"25m2",
            icon1:"icon-bath",
            icon2:"icon-phone",
            icon3:"icon-wifi",
            icon4:"icon-tv",
        },
        {
            id:3,
            img:room_deluxe,
            name:"Deluxe Room",
            mon:"From $199",
            info:"King-size bed",
            m2:"40m2",
            icon1:"icon-bath",
            icon2:"icon-phone",
            icon3:"icon-wifi",
            icon4:"icon-tv",
            icon5:"icon-glass",
            icon6:"icon-cutlery",
        },
    ])
    const [reg,data,name,setReg] = useValidation()
    const [x,setx] = useState()
    const [y,sety] = useState()
    const [a,seta] = useState()
    const [z,setz] = useState()
    return(
        <div>
            <div className='Rooms' id='Rooms'>
                <p className='name'>Rooms</p>
                <div className='info' >
                    <p className='text'>Make yourself at home is our slogan. We offer the best beds in the industry. Sleep well and rest well.</p>
                </div>
            </div>
            <div className='inputs-container'>
                <div className='inputs'>
                    <label className='icons'>
                        <i className='icon-calendar-o'/>
                        <p className='icon-name'>Check In</p>
                    </label>
                    <div className='input-cont' >
                        <input type="date" className='input' placeholder='DD MM YYYY' onChange={(e)=>{
                            setx(e.target.value)
                            sety(e.target.type)
                        }}/>
                        <div className='eror'>{data}</div>
                    </div>
                </div>
                <div className='inputs' >
                    <label className='icons'>
                        <i className='icon-calendar-o'/>
                        <p className='icon-name'>Check Out</p>
                    </label>
                    <div className='input-cont'>
                        <input type="date" className='input' placeholder='DD MM YYYY' onChange={(e)=>{
                            seta(e.target.value)
                            setz(e.target.type)
                        }}/>
                        <div className='eror'>{data}</div>
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
                        <div className='input-cont'>
                            <input type="number" className='input' min="0" max="6"/>
                        </div>
                    </div>
                </div>
                <div className='search-btn-cont'>
                    <label className='icons'>
                        <i className='icon-search'/>
                        <p className='icon-name'>Search</p>
                    </label>
                    <div className='btn-cont'>
                        <button className='btn' onClick={()=>{
                            setReg(x,y)
                            setReg(a,z)
                        }}>Search</button>
                    </div>
                </div>
            </div>
            <div className='Rooms-container'>
                {room.map(el => <Room key={el.id} item={el}/>)}
            </div>
        </div>
    )
}
export default Rooms