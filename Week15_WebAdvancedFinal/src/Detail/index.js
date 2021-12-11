import React from 'react'
import data from '../data'
import './index.css'

const Detail = (props) => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    console.log(props.history);
    const idx = props.match.params.idx;
    return (
        <div>
            <header>
                <b id='back' onClick={props.history.goBack}>Back</b>
            </header>
            <div className='detail'>
                <div className='info'>
                    <h2>{data[idx].title}</h2>
                    <h3>{data[idx].type}</h3>
                    {/* <h3>Service Design</h3> */}
                    <h3>{data[idx].time}</h3>
                    <p>{data[idx].content}</p>
                </div>
                <div className='imgs'>
                    <img src={require('../assets/'+data[idx].img).default} alt="" />
                    {
                        data[idx].imgs.map((item,idx)=>(
                            <img key={idx} src={require('../assets/'+item).default} alt="" />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Detail
