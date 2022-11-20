import React from 'react'

const Heading = (props) => {
  const {mode,changeMode,src}=props
  return (
    <div className={`todo${mode}--top`}>
        <h1 className={`todo${mode}--heading`}>
            TODO
        </h1>
        <div onClick={(e)=>changeMode(e)} className={`todo${mode}--mode`}><img src={src} alt="" /></div>
    </div>
  )
}

export default Heading