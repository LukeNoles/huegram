import HueObject from "../HueObject";
import emptyheart from '/public/emptyheart.png'
import filledheart from '/public/heart.png'
interface Props {
  hue: HueObject,
  toggleLike?: (id?:number)=> void
}

function getTextColor(backgroundColor:string)
{
    const brightness = Math.round(((parseInt(backgroundColor[0]) * 299) +
                        (parseInt(backgroundColor[1]) * 587) +
                        (parseInt(backgroundColor[2]) * 114)) / 1000);
    const textColour = (brightness > 125) ? 'black' : 'white';
    return textColour
  
}
var likecount = 1;
const Hue = ({hue, toggleLike}: Props) => {
  return (
    <div
      className="flex flex-col h-64 aspect-square rounded-3xl text-center justify-between items-center"
      style={{ backgroundColor: hue.color }}
      onClick={ ()=> toggleLike && toggleLike(hue.id)}
    >
      <p className={`text-${getTextColor(hue.color)} text-2xl opacity-80 mix-blend-difference`}>{hue.color}</p>


      {hue.isLiked ? <img src={emptyheart} alt="" className='h-12'/>: <img src={filledheart} alt="" className='h-12'/>}
      {hue.isLiked ? likecount = 0  : likecount = likecount = 1}

      <div className="bg-sky-50 text-zinc-900 flex w-full text-center justify-center p-4 rounded-b-2xl">
        <p className="text-xl">{hue.username}</p>

      </div>
    </div>
  );
};

export default Hue;
