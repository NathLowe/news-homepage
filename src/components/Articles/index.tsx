import React from 'react'


const data = [
    {
        image:"/assets/images/image-retro-pcs.jpg",
        title:"Reviving Retro PCs",
        content: "What happens when old PCs are given modern upgrades?"
    },
    {
        image:"/assets/images/image-top-laptops.jpg",
        title:"Top 10 Laptops of 2022",
        content: "Our best picks for various need and budgets."
    },
    {
        image:"/assets/images/image-gaming-growth.jpg",
        title:"The Growth of Gaming",
        content: "How the pandemic has sparked fresh opportunities."
    },
]

export default function Articles() {
  return (
    <section id="artciles" className='my-4 grid md:grid-cols-3 gap-6'>
        {
            data.map((item, index) => (
                <article key={index} className='grid grid-cols-3 gap-4'>
                    <img src={item.image} alt={item.title} className='h-full object-cover mr-3' />
                    <div className='col-span-2 flex flex-col space-y-2 md:space-y-0 md:justify-between font-bold'>
                        <h4 className='text-muted text-3xl'>0{index+1}</h4>
                        <h5 className='text-third text-lg transition cursor-pointer hover:text-primary' > {item.title} </h5>
                        <p className='text-muted-dark font-normal'>{item.content}</p>
                    </div>
                </article>
            ))
        }
    </section>
  )
}
