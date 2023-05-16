import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/R.png'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'R', 'o', 's', 'h', 'a', 'n']
    const jobArray = ['a', ' ', 's', 'o', 'f', 't','w','a','r','e',' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
    
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className ={letterClass}>H</span>
                    <span className ={`${letterClass} _12`}>i,</span>
                    <br/>
                    <span className ={`${letterClass} _13`}>I</span>
                    <span className ={`${letterClass} _14`}>'m</span>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                    />
                    <br/>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}/>
                </h1>
                <h2>Tech Stack: Python, Java, C, C++, HTML, CSS, JavaScript, MongoDB, Visual Studio Code</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home