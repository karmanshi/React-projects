import React from 'react'

const Heading = (props) => {
    return (
        <>

            <div className='m-5 w-full  flex justify-center items-center text-center'>
                
                <h1 className=' text-3xl font-extrabold drop-shadow-xl text-white '>{props.title}</h1>
            </div>
            
        </>
    )
}

export const SectionContainer = ({props,children}) =>{
   return(
    <div className='m-5 w-full  flex justify-center items-center text-center flex-wrap gap-5 p-5'>{children}
    </div>
   )
}

export default Heading