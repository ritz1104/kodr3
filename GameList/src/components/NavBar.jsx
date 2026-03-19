import React from 'react'
import { NavLink } from 'react-router';

const NavBar = () => {

  function ControllerIcon() {
    return (
      <svg className="w-7 h-7 fill-[#137fec]" viewBox="0 0 24 24">
        <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-11 7H8v2H6v-2H4v-2h2V9h2v2h2v2zm4.5 1c-.83 0-1.5-.67-1.5-1.5S13.67 11 14.5 11s1.5.67 1.5 1.5S15.33 14 14.5 14zm3-3c-.83 0-1.5-.67-1.5-1.5S16.67 8 17.5 8s1.5.67 1.5 1.5S18.33 11 17.5 11z" />
      </svg>
    );
  }
  return (
        <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-[#333333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
              <ControllerIcon />
              <span className="text-xl font-extrabold tracking-tight text-white">GameList</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLink to='/' className="text-sm font-medium text-[#137fec] border-b-2 border-[#137fec] pb-1">Home</NavLink>
              <NavLink to='/Games' className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Games</NavLink>
              <NavLink to='/favourite' className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Favorites</NavLink>
            </nav>

            {/* Search & Profile */}
            <div className="flex items-center gap-4 flex-1 max-w-md ml-8">
              <div className="relative w-full">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  placeholder="Search games..."
                  className="w-full bg-[#111111] border-none focus:ring-1 focus:ring-[#137fec] rounded-lg pl-10 py-2 text-sm text-white placeholder:text-slate-500 outline-none"
                />
              </div>
              <button className="flex items-center justify-center p-2 rounded-full hover:bg-[#111111] text-slate-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
  )
}

export default NavBar