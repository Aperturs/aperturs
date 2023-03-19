import React from 'react'
import { SideBarButton } from '@/components'
import {IoPencil} from 'react-icons/io5';


const Sidebar = () => {
  return (
    <div className='absolute top-0 left-0 h-screen w-[25vw] m-0 
    flex flex-col shadow-lg z-20 pl-6 pt-7'>
        <SideBarButton icon= {<IoPencil className='text-xl mx-4' />} text='Create'
        onClick={() => {}}
        />
        
    </div>
  )
}

export default Sidebar
