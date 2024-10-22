import React, { useState } from 'react'
import ComponentExample from './ComponentExample'

const PropsExample = () => {
    const arr =[
      { key:101,
        name:'Ankit',
        age:25
      },
      { key:102,
        name:'Deepak',
        age:28
      },
      { key:103,
        name:'Rahul',
        age:24
      }
    ]
  return (
    <>
    {/* <ComponentExample info={arr}/> */}

      {arr.map((ele)=>{
         return <ComponentExample info={ele}/>
      })}

    </>
  )
}

export default PropsExample