import Image from 'next/image';

import classes from './hero.module.css';

export default function Hero() {
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image 
                src="/images/site/myPic.jpg" 
                alt="An image showing Rohan" 
                width={300} 
                height={300} />
        </div>
        <h1>Hi, I am Rohan</h1>
        <p>I blog about we development - especially frontend frameworks</p>
    </section>
}