import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonVariants from './components/ButtonVariants'

function App() {
  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center">
      <h1 className="shadow-lg bg-yellow-200 border-2 border-gray-800 rounded-lg text-3xl font-bold text-blue-600 text-center mt-10">
        Tailwind is working! **
      </h1>
    <ButtonVariants />
    </div>
  );
}

export default App
