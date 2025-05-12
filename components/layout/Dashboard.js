"use client"

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

export default function Dashboard() {
  const [sidebarActive, setSidebarActive] = useState(false);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById('sidebar');
      const mobileButton = document.getElementById('mobile-menu-button');
      
      if (window.innerWidth <= 768 && 
          sidebar && mobileButton &&
          !sidebar.contains(event.target) && 
          event.target !== mobileButton &&
          !mobileButton.contains(event.target)) {
        setSidebarActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <div className="flex">
      {/* Mobile Menu Button */}
      <button 
        id="mobile-menu-button" 
        className="fixed top-4 left-4 z-50 p-2 bg-purple-600 text-white rounded-md shadow-lg md:hidden"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Sidebar */}
      <Sidebar active={sidebarActive} />

      {/* Main Content */}
      <MainContent />
    </div>
  );
}