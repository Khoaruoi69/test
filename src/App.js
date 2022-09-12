
import { useImperativeHandle, useRef} from 'react'
import Video from './Video';

function App() {

  const videoRef = useRef()
  const handldePlay = ()=>{
    videoRef.current.play();
  }
  const handleStop=()=>{
    videoRef.current.pause();
  }
  return (
 <div>
   <Video ref={videoRef}/>
   <button onClick={handldePlay}> Play</button>
   <button onClick={handleStop}> Stop</button>
 </div>
  )
}

export default App;
