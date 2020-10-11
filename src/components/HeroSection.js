import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted/>
            <h1>Easing Pandemic</h1>
            <p>We're happy to help you. </p>
            <div className="hero-btns">
                <Button 
                className="btns" buttonStyle='btn--outline'
                buttonSize='btn--large'>
                Get Started!
                </Button>
                <Button 
                className="btns" buttonStyle='btn--primary'
                buttonSize='btn--large'>
                See our Impact <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
