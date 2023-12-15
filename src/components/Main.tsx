import HueObject from '../HueObject'
import Hue from './Hue'
import PostHue from './PostHue'


interface Props {
    hues: HueObject[],
    addHue: (color:string) => void,
    toggleLike: (id?:number)=> void

}

const Main = ({hues, addHue, toggleLike} : Props) => {
  return (
    <div className='grid grid-cols-4'>
      <div className='bg-gradient-to-r from-red-600 via-green-500 to-purple-600 inline-block text-transparent bg-clip-text text-6xl mt-10 ml-10'>
        <h1>Huegram</h1>
      </div>
      <div className="col-start-1 col-end-2">
        <PostHue addHue={addHue}/>
      </div>
      <div className='mt-10 col-start-2 col-end-5 flex flex-wrap w-full justify-center gap-8 overflow-y-auto' id='parentID'>        
        {hues.map( (hue) => ( 
            <Hue hue={hue} toggleLike={toggleLike}/>
       ))}
      </div>

    </div>


    
  )
}

export default Main
