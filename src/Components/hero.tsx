import { type ReactNode } from 'react'
import heroImage from '../assets/hero.jpg'

type HeroProps = {
    children: ReactNode
}

function Hero({children}: HeroProps){
    return(
        <div className="flex-1 bg-cover bg-center relative" style={{backgroundImage: `url(${heroImage})`}}>
            <div className=' bg-blue-950/60 absolute inset-0 flex justify-center'>
                {children}
            </div>
        </div>
    )}

export default Hero