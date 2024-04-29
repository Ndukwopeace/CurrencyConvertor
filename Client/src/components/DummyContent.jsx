import React from 'react'

const DummyContent = (props) => {
    const {graphicPage , alertPage} = props
  return (
    <div className='text-center text-3xl py-20' style={{
        color: graphicPage? 'purple': alertPage? 'grey': 'black',
    }}>DummyContent</div>
  )
}

export default DummyContent