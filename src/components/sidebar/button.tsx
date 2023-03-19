import React, { FC, MouseEventHandler, ReactNode } from 'react'

interface SideBarButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  icon: ReactNode
  text: string
}

const SideBarButton: FC<SideBarButtonProps> = ({ onClick, icon, text }) => {
  return (
    <button className='btn w-48 rounded-lg bg-[#F4F3FF] 
    flex items-center justify-start pl-3 h-12 hover:bg-[#e3f2ff] hover:shadow-sm
    text-lg
    ' 
    onClick={onClick}>
      {icon}
      {text}
    </button>
  )
}

export default SideBarButton
