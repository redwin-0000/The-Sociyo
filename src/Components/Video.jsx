import React from 'react'

const Video = () => {
    return (
        <div className='bg-blur'>
        <div>
        <video class="w-full shadow-lg" autoplay loop controls muted>
            <source
                src="https://tecdn.b-cdn.net/img/video/Sail-Away.mp4"
                type="video/mp4" />
        </video>
        </div>
        </div>
    )
}

export default Video