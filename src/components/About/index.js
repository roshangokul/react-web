import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/R.png'
import './index.scss'

const About= () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className ={letterClass}>A</span>
                    <span className ={`${letterClass} _12`}>B</span>
                    <span className ={`${letterClass} _13`}>O</span>
                    <span className ={`${letterClass} _14`}>U</span>
                    <span className ={`${letterClass} _15`}>T</span>
                    <span className ={`${letterClass} _16`}> </span>
                    <span className ={`${letterClass} _17`}>M</span>
                    <span className ={`${letterClass} _18`}>E</span>
                    <br/>
                </h1>
                <h2>
                    <p>Hello! My name is Roshan Gokul, an incoming Junior at the University of 
                        Minnesota Twin-Cities. I am majoring in Computer Science and Data Science. In my free time
                        I enjoy lifting, watching anime (One Piece), basketball, and trying new foods! 
                    </p>
                    <br/>
                    <p>I am currently on the hunt for internship opportunities in the tech field for the summer of 2024, specifically working in the back-end, but I am also open to 
                        working full-stack. I've had experiences working independently, in pairs, and in agile teams in a variety of programming languages.
                    </p>
                </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}


export default About 