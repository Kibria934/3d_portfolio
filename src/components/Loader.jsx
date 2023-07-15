import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const CanvasLoader = () => {
  const { progress } = useProgress()
  // console.log(progress)
  return (
    <html
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 20,
        fontSize: 500,
        color: "white",
        position: "absolute",
        top: "100px",
        border: "2px solid white",
        left: "50px"
      }}>
      {/* <span className='canvas-loader'></span> */}
      {/* <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p> */}{progress}%
    </html>
  )
}

export default CanvasLoader