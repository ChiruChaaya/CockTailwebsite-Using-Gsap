import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import SplitType from 'split-type';

const Hero = () => {
useGSAP(()=>{
 const heroSplit= new SplitType('.titles',{type:'chars, words'});
 const paragraphSplit= new SplitType('.subtitle',{type:'lines'});
 heroSplit.chars.forEach((char)=>char.classList.add("text-gradient"));
 gsap.from(heroSplit.chars,{
    y:100,
    opacity:0,
    stagger:0.05,
    duration:1,
    ease:"power4.out"
 });

 gsap.from(paragraphSplit.lines,{
    y:40,
    opacity:0,
    stagger:0.15,
    duration:0.5,
    delay:0.3,
    ease:"power2.out"
 });

 gsap.timeline({
    scrollTrigger:{
        trigger:"#hero",
        start:'top top',
        end:'bottom top',
        scrub:true,
    }
 }).to(".right-leaf",{y: 200},0)
    .to(".left-leaf", {y:-200},0)

},[]);


  return (
    <>
    <section id="hero" className='noisy'>
    <h1 className="titles">MOJITO</h1>
    <img src='/images/hero-left-leaf.png' alt='left-leaf' className='left-leaf'/>
    <img src='/images/hero-right-leaf.png' alt='right-leaf' className='right-leaf'/>
    <div className='body'>
        <div className='content'>
            <div className='space-y-5 hiiden md:block'>
                <p>Cool Crisp Classic</p>
                <p className='subtitle'>
                    Sip the spirit <br/> of Summer
                </p>
            </div>
            <div className='view-cocktails'>
                <p className='subtitle'>Every cocktailon the menu is a blend of premium ingredient, creative
                    flair, and timeless recipes - designed to delight your sense.
                </p>
                <a href="#cocktails">View Cocktails</a>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Hero