import AudioDuration from "./AudioDuration";
import { setActiveSong, updatePlayPause } from "../redux/actions/playerSlice";
import { FaPlay, FaPause  } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";


function SongCard({songDetails, i}) {
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const dispatch = useDispatch();

    const handleClick = () =>{
        if(isPlaying && activeSong?.name === songDetails.name){
            dispatch(updatePlayPause(false));
        }else{
            dispatch(updatePlayPause(true));
            dispatch(setActiveSong({activeSong:songDetails, i:i}));
        }
    }
    return ( 
    <div onClick={handleClick} key={songDetails.id} className={"group min-w-[25vw] rounded my-1 flex flex-row p-4 pl-0 w-full cursor-pointer hover:bg-black hover:bg-opacity-30 hover:backdrop-blur-lg " + (activeSong?.name === songDetails.name ? "bg-black bg-opacity-30 backdrop-blur-lg" : "")}> 
        <div className="relative">
            <div className={`absolute left-8 top-4 justify-center hidden items-center group-hover:flex` }>
            {activeSong?.name === songDetails.name && isPlaying ? (
                <div className="text-black bg-opacity-60" >
                    <FaPause />
                </div>
            )
            : (
                <div className="text-black bg-opacity-60" >
                    <FaPlay />
                </div>
            )}
            </div>
            <img
                alt="avatar"
                src={`https://cms.samespace.com/assets/${songDetails.cover}`}
                loading="lazy"
                className="h-12 w-12 rounded-full mx-4 hover:bg-black hover:bg-opacity-30 hover:backdrop-blur-lg"
            />
        </div>
        <div className="flex-1 flex justify-between text-lg">
            <div>
                <div className="truncate">
                    {songDetails.name}
                </div>
                <div className="truncate text-gray-300 text-sm">
                    {songDetails.artist}
                </div>
            </div>
            <div>
                <AudioDuration audioUrl={songDetails.url} />
            </div>
        </div>
       

    </div> );
}

export default SongCard;