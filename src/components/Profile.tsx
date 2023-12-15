import './Palette.css'
import { useState } from 'react'


const Profile = () => {
  const[color, setColor] = useState('')
  return (
    <div className='flex flex-col border-l-2 p-8 items-center text-white'>
      <div className="relative text-gray-600">
        <input type="text" name="search" placeholder="Search" className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" onChange={ (event) => setColor(event.target.value) }/>

      </div>
      <div className='h-10 w-10/12 rounded' style={{ backgroundColor: color }}></div>
      

        

        <div className="palette mt-6">
          <div style={{ backgroundColor: '#ff2299'}}></div>
          <div style={{ backgroundColor: '#ee2299'}}></div>
          <div style={{ backgroundColor: '#dd2299'}}></div>
          <div style={{ backgroundColor: '#cc2299'}}></div>
          <div style={{ backgroundColor: '#bb2299'}}></div>
          
          <div style={{ backgroundColor: ''}}></div>
          <div style={{ backgroundColor: ''}}></div>
          <div style={{ backgroundColor: ''}}></div>
          <div ></div>

        </div>

        <h1>@kodom</h1>


    </div>
  )
}

export default Profile
