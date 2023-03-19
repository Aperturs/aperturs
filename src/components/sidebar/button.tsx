import React, { FC, MouseEventHandler, ReactNode } from 'react'

interface SideBarButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  icon: ReactNode
  text: string
}

const SideBarButton: FC<SideBarButtonProps> = ({ onClick, icon, text }) => {
  return (
    <button className='btn w-44 shadow-md rounded-md bg-purple-200 flex align-middle justify-start pl-3 h-10 pt-2' onClick={onClick}>
      {icon}
      {text}
    </button>
  )
}

export default SideBarButton
