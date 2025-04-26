import React from 'react'

function Hero() {
  return (
    <div className="relative h-[700px]	 bg-cover bg-center bg-[url('/images/image-5.jpg')] flex flex-col justify-center items-center text-white text-center px-4">
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="relative z-10 flex flex-col items-center">
        <span className="text-7xl font-bold mb-4 text-white">Rent Smart, Save Big</span>
        <p className="text-3xl mb-6 font-bold text-white">Cruise through Qatar with Comfort, Convenience & Class.</p>
        <button className="bg-black text-white font-bold text-3xl py-2 px-6 rounded hover:bg-yellow-500 transition">Know More</button>
      </div>
    </div>)
}

export default Hero