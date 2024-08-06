import { useEffect, useState } from "react";
import SongCard from "./SongCard";

function SongList({songs}) {
    const [searchText, setSearchText] = useState("");
    const [list, setList] = useState(songs);

    useEffect(() => {
        if(songs){
            setList(songs);
        }
    },[songs])

    const handleSongSearch = (e) => {
        setSearchText(e.target.value);
        setList(songs.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.artist.toLowerCase().includes(e.target.value.toLowerCase())))
    }


    return ( <div className="mx-4">
        <div className="py-4">
            <input className={"w-full border border-transparent rounded-lg hover:border-white focus:outline-none bg-white/5 bg-opacity-80 backdrop-blur-sm px-2 py-4 " +  (searchText.length === 0 ? 'custom-search' : '')} type='search' value={searchText} placeholder={'Search Song, Artist'}onChange={handleSongSearch}/>
        </div>
       <div className="flex flex-col overflow-y-scroll h-[64vh]">
            {list.map((item, i) => <SongCard key={item.id} songDetails={item} i={i}/>)}
        </div> 
    </div> );
}

export default SongList;