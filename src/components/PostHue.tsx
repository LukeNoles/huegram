import { useState } from 'react'
import Hue from './Hue'

interface Props{
    addHue: (color:string)=> void
}

const PostHue = (props:Props) => {

    const[color, setColor] = useState('')

  return (
    <div className='flex flex-col p-4 justify-evenly gap-8 p-5 rounded mt-8'>

        <div className='flex flex-col w-full p-4 gap-4 rounded' style={{backgroundColor: 'grey'}}>
            <input type="text" placeholder="Hexcode" name="hue" id="hue" className = "bg-white h-10 px-5 pr-10 rounded text-sm focus:outline-none" onChange={ (event) => setColor(event.target.value) } />
            <a href="#" onClick={ () => props.addHue(color)  } className="btn bg-white text-cyan-950 text-center rounded w-">Post!</a>
        </div>

        <Hue hue={ {color, username:"kaylee", likes:3, isLiked: false}}  />


    </div>
  )
}

export default PostHue
