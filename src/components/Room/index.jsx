import './style.scss';

function Room(props){
    let item = props.item
    return(
        <div>
           <div className='rooms-cont'>
                <div className='img-cont'>
                    <img src={item.img} className="img"/>
                    <div className='rooms-info-cont'>
                        <p className='name'>{item.name}</p>
                        <p className='money'>{item.mon}</p>
                        <p className='info'>{item.info}</p>
                        <p className='m2'>{item.m2}</p>
                        <div className='icons'>
                            <i className={item.icon1} style={{marginRight:"10px"}}/>
                            <i className={item.icon2} style={{marginRight:"10px"}}/>
                            <i className={item.icon3} style={{marginRight:"10px"}}/>
                            <i className={item.icon4} style={{marginRight:"10px"}}/>
                            <i className={item.icon5} style={{marginRight:"10px"}}/>
                            <i className={item.icon6}/>
                        </div>
                        <div className='btn-cont'>
                            <button className='btn'>Choose Room</button>
                        </div>
                    </div>
                </div>
                
           </div>
        </div>
    )
}
export default Room