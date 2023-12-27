import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const savataAddress = {stree1: 'Abc Apartment', city: 'Nandgaon'}
  return (
    <>
      <h1 className='text-3xl bg-green-500 rounded-md'>Vite with Tailwind</h1>
      <Card username='Hitesh' post='Staff Engineer'/>
      <Card username='Savata' address={savataAddress} />
      <Card />
      <Card username='Dipesh' />
    </>
  )
}

export default App
