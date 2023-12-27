import React from 'react'

function Card({username = "Anonymous", post='Not Assigned Yet', address={city:'India'}}) {
    console.log(address)
  return (
    <div>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://thumbs.dreamstime.com/b/asian-women-holding-camera-shooting-nature-woman-relax-time-holiday-concept-travel-color-vintage-tone-85492963.jpg" alt="" width="384" height="512" />
            <div className="pt-6 md:p-8 text-center space-y-4">
                <blockquote>
                <p className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quas.
                </p>
                </blockquote>
                <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                    {username}
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                    {post}, {address.city}
                </div>
                </figcaption>
            </div>
        </figure>
    </div>
  )
}

export default Card