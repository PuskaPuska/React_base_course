import { useRef } from "react"

const VideoPlayer = ({ src, ...props}) => {
    const ref= useRef()

    const handlePlay= () => {
        ref.current.play()
    }

    const handlePause= () => {
        ref.current.pause()
    }

    return (
        <div>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePlay}>Play</button>
            <video src={src} ref={ref} {...props} />
        </div>
    )
}

export default VideoPlayer