import React from 'react'

export default function Hero() {
  return (
    <section id="hero">
        <div className="image mb-6 w-full">
            <picture>
                <source media="(min-width:768px)" srcSet="/assets/images/image-web-3-desktop.jpg"/>
                <img src="/assets/images/image-web-3-mobile.jpg" alt="Image Desktop" className="w-full object-cover" />
            </picture>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
            <h2 className="text-5xl font-semibold text-third" >The Bright Future of Web 3.0 ?</h2>
            <div className='flex flex-col justify-between' >
                <p className="text-muted-dark pb-4 block">We dive into the next evolution of the web that claims to pull the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                <button type='button' className='px-6 py-3 w-fit transition bg-primary uppercase text-white tracking-[3px] hover:bg-third' >Read More</button>
            </div>
        </div>
    </section>
  )
}
