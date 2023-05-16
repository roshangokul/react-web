import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/R.png'
import './index.scss'

const Contact= () => {
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
                    <span className ={`${letterClass} _12`}>R</span>
                    <span className ={`${letterClass} _13`}>E</span>
                    <span className ={`${letterClass} _14`}>A</span>
                    <span className ={`${letterClass} _15`}>C</span>
                    <span className ={`${letterClass} _16`}>H</span>
                    <span className ={`${letterClass} _17`}> </span>
                    <span className ={`${letterClass} _18`}>O</span>
                    <span className ={`${letterClass} _19`}>U</span>
                    <span className ={`${letterClass} _20`}>T</span>
                    <span className ={`${letterClass} _21`}>!</span>
                    
                    <br/>
                </h1>
                <h2>
                    <p>Please reach out if you have any questions or want to connect!
                    </p>
                    <br/>
                </h2>
                
            </div>
        </div>
    )
}


export default Contact