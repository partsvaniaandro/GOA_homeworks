import React from 'react'
import useToggle from '../hooks/useToggle'

const SideBar = () => {
    const {bool: isOpen , toggleBool: toggleSidebar} = useToggle()
  return (
    <div className="relative h-screen">
      {/* Toggle Button - always visible */}
      <button
        onClick={toggleSidebar}
        className="p-[5px] bg-gray-800 text-white rounded z-50 translate-x-70 translate-y-[-60px] fixed"
      >
        ☰
      </button>

      {/* Sidebar - slides in/out */}
      <div
        className={`
          fixed top-0 left-0 h-full w-[256px] bg-gray-900 text-[#ffffff]
          transform transition-transform duration-200
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          z-40
        `}
      >
        <div className="p-[5px]">
          <p>content</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar