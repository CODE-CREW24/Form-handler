"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThLarge, faBuilding, faChalkboardTeacher, 
  faChartBar, faCog, faSignOutAlt, faSchool
} from '@fortawesome/free-solid-svg-icons';

export default function Sidebar({ active }) {
  return (
    <aside 
      id="sidebar" 
      className={`bg-white shadow-lg w-64 h-screen flex flex-col z-40 transition-all duration-300 ease-in-out
                 md:translate-x-0 ${active ? 'translate-x-0' : '-translate-x-full'} 
                 md:static fixed`}
    >
      <div className="p-4 border-b flex items-center space-x-2">
        <div className="bg-purple-600 text-white p-2 rounded-md">
          <FontAwesomeIcon icon={faSchool} />
        </div>
        <h2 className="text-xl font-bold">College Compass</h2>
      </div>
      
      <div className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
            <span className="font-semibold">DS</span>
          </div>
          <div>
            <p className="font-medium">Dr. Smith</p>
            <span className="text-sm text-slate-500">Principal</span>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg bg-purple-50 text-purple-700">
          <FontAwesomeIcon icon={faThLarge} className="w-5 text-center" />
          <span>Dashboard</span>
        </a>
        <a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 text-slate-600">
          <FontAwesomeIcon icon={faBuilding} className="w-5 text-center" />
          <span>Departments</span>
        </a>
        <a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 text-slate-600">
          <FontAwesomeIcon icon={faChalkboardTeacher} className="w-5 text-center" />
          <span>Teachers</span>
        </a>
        <a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 text-slate-600">
          <FontAwesomeIcon icon={faChartBar} className="w-5 text-center" />
          <span>Reports</span>
        </a>
        <a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 text-slate-600">
          <FontAwesomeIcon icon={faCog} className="w-5 text-center" />
          <span>Settings</span>
        </a>
      </nav>
      
      <div className="p-4 border-t">
        <a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-red-50 text-red-600">
          <FontAwesomeIcon icon={faSignOutAlt} className="w-5 text-center" />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
}