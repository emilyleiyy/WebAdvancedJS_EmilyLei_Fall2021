import React,{useState} from 'react'
import data from '../data';
import {Link} from 'react-router-dom'
import './index.css'

const Home = (props) => {
    const [select,setSelect] = useState(window.location.hash.slice(1)||'intro')
    return (
        <div className='home'>
            <header>
                <b id='name'> </b>
                <span>
                    <a onClick={()=>setSelect('intro')} className={select=='intro'?'active':''} href="#intro">About</a>
                    <a onClick={()=>setSelect('items')} className={select=='items'?'active':''} href="#items">Projects</a>
                    <a onClick={()=>setSelect('contact')} className={select=='contact'?'active':''} href="#contact">Contact</a>
                </span>
            </header>

            <section id='intro'>
            <div class="doors__left"></div>
		    <div class="doors__right"></div>
                <h1>“Design for others.”</h1>
                <h2>I’m Emily Lei, a designer with a passion for user experience, interactive media and typography.</h2>
                <div class="basic">
                    <div>
                        <h3>Education</h3>
                        <p>Parsons School of Design</p>
                        <p>(BFA Communication Design)</p>
                    </div>
                    <div>
                        <h3>Skills</h3>
                        <p>Adobe XD, Figma, Touch Designer, Indesign, Photoshop, Illustrator, Javascript, React</p>
                    </div>
                    <div>
                        <h3>Resume</h3>
                        <p>Link to my resume</p>
                    </div>
                </div>
            </section>


            
            <section id='items' className='items'>
                {
                    data.map((item,idx)=>{
                        return <div className='item' key={idx}>
                            <Link to={'/detail/'+idx}>
                                <img src={require('../assets/'+item.img).default} alt="" />
                                {/* <h3>{item.title}</h3> */}
                            </Link>
                        </div>
                    })
                }
            </section>


            {/* <section id='contact'>
                <form action="">
                    <div><input type="text" placeholder='NAME' /></div>
                    <div><input type="text" placeholder='EMAIL' /></div>
                    <div><textarea name="" id="" cols="30" rows="10" placeholder='MESSAGE'></textarea></div>
                    <button type='submit'> submit </button>
                </form>
            </section> */}

            <section id='contact'>
                <div id='icon'>
                    <span><img src="https://img.icons8.com/ios-glyphs/60/000000/instagram-new.png"/></span>
                    <span><img src="https://img.icons8.com/ios-glyphs/60/000000/facebook.png"/></span>
                    <span><img src="https://img.icons8.com/ios-glyphs/60/000000/twitter--v1.png"/></span>
                    <span><img src="https://img.icons8.com/ios-glyphs/60/000000/linkedin.png"/></span>
                </div>
                <h2 id='email'>leiy961@newschool.edu</h2>
            </section>

            {/* <button onClick={()=>props.history.push('/detail')}>detail</button> */}
        </div>
    )
}

export default Home
