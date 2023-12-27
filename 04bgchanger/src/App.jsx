import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  const updateBg = (color) => {
    setColor(color)
  };

  return (
    <div className="w-full h-screen duration-200 bg-black" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
          onClick={() => setColor('red')}>Test</button>
          <button 
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
          onClick={() => setColor('green')}>Test 2</button>
          <button 
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
          onClick={() => setColor('blue')}>Test 3</button>
        </div>
      </div>
    </div>
  )
}

export default App
