import MusicPlayer from "./MusicPlayer";

function PlayerContainer() {
    return ( <div className="flex-auto mt-4 flex flex-col justify-center w-full items-center max-sm:mt-0" >
        <MusicPlayer />
    </div> );
}

export default PlayerContainer;