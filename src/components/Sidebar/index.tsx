import React from 'react'

const data = [
    {
        title: "Hydrogen Vs Electric Cars",
        content: "Will hydrogen-fueled cars ever catch uo 10 EVs?"
    },
    {
        title: "The Downsides of AI Artistry",
        content: "What are the possible adverse effects of on-demand AI image generation?"
    },
    {
        title: "Is VC Funding Drying Up?",
        content: "Private Funding by VC firms is down 50% YOY. We take a look at what that means."
    },
]

export default function Sidebar() {
  return (
    <section id="sidebar" className='px-4 py-6 bg-third' >
        <h2 className="text-secondary text-3xl font-semibold">New</h2>
        <div className="my-4">
            {data.map((item, index) => (
                <React.Fragment key={index}>
                    <div>
                        <h3 className="text-white text-xl font-semibold transition cursor-pointer hover:text-secondary mb-2">{item.title}</h3>
                        <p className="text-muted text-sm">{item.content}</p>
                    </div>
                    {(index !== data.length - 1) && <hr className="bg-muted my-6 opacity-40" />}
                </React.Fragment>
            ))}
        </div>
    </section>
  )
}
