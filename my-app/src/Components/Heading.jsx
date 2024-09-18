import React from 'react'

export const ParentContainer=({id, children})=>{
    return (
        <div className='mb-5 py-2.5 w-full font-sans' id={id} style={{scrollMarginTop:"50px"}}>
        {children}
        </div>
    )
}

const Heading = (props) => {
    return (
        <>
            <div className='mt-5 p-5 w-full'>
                <p className='text-3xl font-extrabold drop-shadow-xl text-white'>{props.title}</p>
            </div>  
        </>
    )
}

export const SectionContainer = ({props, children}) =>{
    return(
    <div className="w-full flex justify-start items-center flex-wrap gap-5 p-5">{children}
    </div>
   )
}

export default Heading