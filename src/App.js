import SideBar from './components/SideBar';
import MainList from './components/MainList';
import PlayerContainer from './components/PlayerContainer';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundry';

function App() {
  const [accent, setAccent] = useState('#1e1407');
  const { activeSong } = useSelector((state) => state.player);

  useEffect(() => {
    if(Object.keys(activeSong).length !== 0){
      setAccent(activeSong.accent)
    }
  },[activeSong])

  return (
    <ErrorBoundary>
      <div style={{'--bgColor': accent}} className={`container flex md:flex-row custom-background h-screen max-w-[100vw] overflow-y-scroll text-white max-sm:flex-col`}>
        <SideBar/>
        <MainList/>
        <PlayerContainer/>
      </div>
    </ErrorBoundary>
    
  );
}

export default App;
