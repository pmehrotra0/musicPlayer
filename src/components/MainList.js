import { useEffect, useState } from "react";
import { useGetSongListQuery } from "../api/songsAPI";
import YourList from "./YourList";
import TopList from "./TopList";
import Loader from "./Loader";
import Error from "./Error";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "../redux/actions/playerSlice";
import { IoMenu } from "react-icons/io5";

function MainList() {
    const [songList, setSongList] = useState([]);
    const [menuOpen, setMenuOpen] = useState(true);
    const [tabSelected, setTabSelected] = useState(1);
    const [topTrackList, setTopTrack] = useState([]);
    const dispatch = useDispatch();

    const {data, isFetching, error} = useGetSongListQuery();

    const [smallerScreen, setMatches] = useState(
        window.matchMedia("(max-width: 644px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(max-width: 644px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);

      useEffect(() => {
        if(smallerScreen === true){
            setMenuOpen(false);
        }
        else{
            setMenuOpen(true);
        }
      },[smallerScreen])

      useEffect(() => {
        if(!isFetching && !error){
            setSongList(data.data);
            setTopTrack(data.data?.filter(item => item.top_track))
        }
      }, [data, isFetching, error])

    useEffect(() => {
        if(tabSelected === 1){
            dispatch(setCurrentSong(songList))
        }
        else{
            dispatch(setCurrentSong(topTrackList))
        }
    }, [tabSelected, songList, topTrackList])// eslint-disable-line

    const tabs = [
        {id: 1, label: "For You"},
        {id: 2, label: "Top Tracks"},
    ]
    return ( 
    <>
    <div className={"cursor-pointer " + (!smallerScreen ? 'hidden' : 'relative right-0 top-[0vh] z-50')} onClick={() => {setMenuOpen(prev => !prev)}}><IoMenu className="mx-6 w-8 h-8 float-right"/></div>
    {menuOpen && <div className="flex-auto mt-4 max-sm:relative max-md:bottom-0 max-md:mt-0">
        <div className="flex flex-row my-4 font-['Inter']">
            {tabs.map((item) => (
                <div className={"px-4 font-semibold cursor-pointer " + (tabSelected === item.id ? 'text-white' : 'text-slate-500')} key={item.id} onClick={() => setTabSelected(item.id)} >{item.label}</div>
            )) }
        </div>
        {isFetching && <Loader />}
        {error && <Error />}
        {!isFetching && !isFetching ?
            tabSelected === 1 ? <YourList songs={songList}/> : <TopList songs={topTrackList}/>
            : <></>
        }
    </div>
    }
    </> );
}

export default MainList;