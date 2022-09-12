import Video1 from './Video/Video1.mp4'
import {useRef, useImperativeHandle} from 'react'
import {forwardRef} from 'react'


function Video(props,ref){

    const videoRef = useRef()
    useImperativeHandle(ref, () =>({
        play(){
            videoRef.current.play()
        },
        pause(){
            videoRef.current.pause()
        }
    }))
    return (
        <video 
        ref={videoRef}
        src={Video1}
        width = {290}
        controls
        />

    )
}

export default forwardRef(Video);