"use client"
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThLarge, faBuilding, faChalkboardTeacher, faChartBar, faCog, faSignOutAlt,
  faBars, faSchool, faFileAlt, faUserGraduate, faBell, faCalendarAlt,
  faExclamationCircle, faPlus, faDownload, faLaptopCode, faCalculator, faEye,
  faEdit, faTrashAlt, faEllipsisV, faChevronLeft, faChevronRight
} from '@fortawesome/free-solid-svg-icons';

// Main App Component
function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Dashboard />
    </div>
  );
}

// Dashboard Component
function Dashboard() {
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

// Sidebar Component
function Sidebar({ active }) {
  return (
    <aside 
      id="sidebar" 
      className={`sidebar bg-white shadow-lg w-64 h-screen flex flex-col z-40 ${active ? 'active' : ''}`}
      style={{
        transition: 'all 0.3s ease',
        '@media (max-width: 768px)': {
          transform: active ? 'translateX(0)' : 'translateX(-100%)',
          position: 'fixed',
          zIndex: 50,
          height: '100vh',
        }
      }}
    >
      <div className="p-4 border-b flex items-center space-x-2">
        <div className="bg-purple-600 text-white p-2 rounded-md">
          <FontAwesomeIcon icon={faSchool} />
        </div>
        <h2 className="text-xl font-bold">CollegeForminator</h2>
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

// Main Content Component
function MainContent() {
  return (
    <main className="flex-1 min-h-screen">
      <Header />
      <ContentContainer />
    </main>
  );
}

// Header Component
function Header() {
  return (
    <header className="bg-white shadow-sm p-4 md:p-6">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Principal Dashboard</h1>
        <p className="text-slate-500 mt-1">Welcome back, Dr. Smith. Here's an overview of your campus.</p>
      </div>
    </header>
  );
}

// Content Container Component
function ContentContainer() {
  return (
    <div className="container mx-auto p-4 md:p-6 space-y-6">
      <StatsCards />
      <QuickAccessCards />
      <DepartmentOverview />
    </div>
  );
}

// Stats Cards Component
function StatsCards() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      <StatCard 
        title="Total Teachers"
        value="45"
        icon={faChalkboardTeacher}
        iconBg="bg-purple-100"
        iconColor="text-purple-600"
        progressLabel="Department distribution"
        progressValue="75%"
        progressColor="bg-gradient-to-r from-purple-500 to-indigo-500"
      />
      
      <StatCard 
        title="Departments"
        value="8"
        icon={faBuilding}
        iconBg="bg-indigo-100"
        iconColor="text-indigo-600"
        progressLabel="Growth rate"
        progressValue="+14%"
        progressValueColor="text-emerald-600"
        progressColor="bg-gradient-to-r from-indigo-500 to-blue-500"
        progressWidth="65%"
      />
      
      <StatCard 
        title="Active Forms"
        value="127"
        icon={faFileAlt}
        iconBg="bg-blue-100"
        iconColor="text-blue-600"
        progressLabel="Processing status"
        progressValue="60%"
        progressValueColor="text-amber-600"
        progressColor="bg-gradient-to-r from-blue-500 to-sky-500"
        progressWidth="60%"
      />
      
      <StatCard 
        title="Students"
        value="1250"
        icon={faUserGraduate}
        iconBg="bg-sky-100"
        iconColor="text-sky-600"
        progressLabel="Enrollment target"
        progressValue="92%"
        progressValueColor="text-emerald-600"
        progressColor="bg-gradient-to-r from-sky-500 to-emerald-500"
        progressWidth="92%"
      />
    </section>
  );
}

// Stat Card Component
function StatCard({ 
  title, 
  value, 
  icon, 
  iconBg, 
  iconColor, 
  progressLabel, 
  progressValue, 
  progressValueColor = "text-slate-600", 
  progressColor, 
  progressWidth 
}) {
  return (
    <div className="stats-card bg-white p-5 rounded-xl shadow-sm">
      <div className="flex justify-between">
        <div>
          <h3 className="text-sm text-slate-500 font-medium">{title}</h3>
          <p className="text-2xl font-bold text-slate-800 mt-1">{value}</p>
        </div>
        <div className={`${iconBg} p-3 rounded-lg ${iconColor}`}>
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
      <div className="mt-3">
        <div className="flex justify-between text-xs mb-1">
          <span className="font-medium text-slate-600">{progressLabel}</span>
          {progressValue && (
            <span className={`font-medium ${progressValueColor}`}>{progressValue}</span>
          )}
        </div>
        <div className="progress-bar">
          <div 
            className={`progress-value ${progressColor}`} 
            style={{ width: progressWidth || progressValue }}
          ></div>
        </div>
      </div>
    </div>
  );
}

// Quick Access Cards Component
function QuickAccessCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      <QuickAccessCard 
        icon={faBell}
        iconBg="bg-amber-100"
        iconColor="text-amber-600"
        title="Pending Approvals"
        description="15 items require your attention"
      />
      
      <QuickAccessCard 
        icon={faCalendarAlt}
        iconBg="bg-emerald-100"
        iconColor="text-emerald-600"
        title="Upcoming Events"
        description="3 events scheduled this week"
      />
      
      <QuickAccessCard 
        icon={faExclamationCircle}
        iconBg="bg-rose-100"
        iconColor="text-rose-600"
        title="Critical Alerts"
        description="2 issues need immediate action"
      />
    </section>
  );
}

// Quick Access Card Component
function QuickAccessCard({ icon, iconBg, iconColor, title, description }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm flex space-x-4 items-center">
      <div className={`${iconBg} p-3 rounded-lg ${iconColor}`}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-slate-500 text-sm">{description}</p>
      </div>
      <button className="ml-auto bg-slate-100 hover:bg-slate-200 text-slate-600 p-2 rounded-lg">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

// Department Overview Component
function DepartmentOverview() {
  // Sample department data
  const departments = [
    {
      id: 1,
      name: 'Computer Science',
      icon: faLaptopCode,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      head: { name: 'Prof. Johnson', initials: 'PJ' },
      teachers: 12,
      students: 320,
      forms: 45,
      performance: 85,
      performanceColor: 'bg-emerald-500',
      performanceTextColor: 'text-emerald-600'
    },
    {
      id: 2,
      name: 'Mathematics',
      icon: faCalculator,
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      head: { name: 'Dr. Williams', initials: 'DW' },
      teachers: 8,
      students: 280,
      forms: 32,
      performance: 76,
      performanceColor: 'bg-blue-500',
      performanceTextColor: 'text-blue-600'
    }
  ];

  return (
    <section className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-5 border-b border-slate-100">
        <div className="flex flex-col md:flex-row justify-between md:items-center space-y-3 md:space-y-0">
          <div>
            <h2 className="text-xl font-semibold text-slate-800">Department Overview</h2>
            <p className="text-slate-500 text-sm">Performance metrics of all departments</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm flex items-center justify-center">
              <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Department
            </button>
            <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors text-sm flex items-center justify-center">
              <FontAwesomeIcon icon={faDownload} className="mr-2" /> Export
            </button>
          </div>
        </div>
      </div>
      
      {/* Desktop Table */}
      <DesktopDepartmentTable departments={departments} />

      {/* Mobile Cards */}
      <MobileDepartmentCards departments={departments} />
      
      {/* Pagination */}
      <Pagination />
    </section>
  );
}

// Desktop Department Table Component
function DesktopDepartmentTable({ departments }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full hidden md:table">
        <thead>
          <tr className="bg-slate-50">
            <th className="text-left p-4 text-sm font-medium text-slate-500">Department</th>
            <th className="text-left p-4 text-sm font-medium text-slate-500">Head</th>
            <th className="text-center p-4 text-sm font-medium text-slate-500">Teachers</th>
            <th className="text-center p-4 text-sm font-medium text-slate-500">Students</th>
            <th className="text-center p-4 text-sm font-medium text-slate-500">Active Forms</th>
            <th className="text-center p-4 text-sm font-medium text-slate-500">Performance</th>
            <th className="text-right p-4 text-sm font-medium text-slate-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map(dept => (
            <tr key={dept.id} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
              <td className="p-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg ${dept.iconBg} flex items-center justify-center ${dept.iconColor}`}>
                    <FontAwesomeIcon icon={dept.icon} />
                  </div>
                  <span className="font-medium text-slate-700">{dept.name}</span>
                </div>
              </td>
              <td className="p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <span className="font-medium text-xs">{dept.head.initials}</span>
                  </div>
                  <span className="text-slate-700">{dept.head.name}</span>
                </div>
              </td>
              <td className="p-4 text-center text-slate-700">{dept.teachers}</td>
              <td className="p-4 text-center text-slate-700">{dept.students}</td>
              <td className="p-4 text-center text-slate-700">{dept.forms}</td>
              <td className="p-4">
                <div className="flex justify-center">
                  <div className="w-24 bg-slate-100 rounded-full h-2">
                    <div className={`${dept.performanceColor} h-2 rounded-full`} style={{ width: `${dept.performance}%` }}></div>
                  </div>
                  <span className="ml-2 text-xs font-medium text-slate-600">{dept.performance}%</span>
                </div>
              </td>
              <td className="p-4 text-right">
                <div className="flex justify-end space-x-2">
                  <button className="p-1.5 text-slate-500 hover:text-purple-600 transition-colors">
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                  <button className="p-1.5 text-slate-500 hover:text-amber-600 transition-colors">
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className="p-1.5 text-slate-500 hover:text-rose-600 transition-colors">
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Mobile Department Cards Component
function MobileDepartmentCards({ departments }) {
  return (
    <div className="md:hidden divide-y divide-slate-100">
      {departments.map(dept => (
        <div key={dept.id} className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-lg ${dept.iconBg} flex items-center justify-center ${dept.iconColor}`}>
                <FontAwesomeIcon icon={dept.icon} />
              </div>
              <div>
                <h4 className="font-medium text-slate-800">{dept.name}</h4>
                <p className="text-sm text-slate-500">{dept.head.name}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-slate-500 hover:text-purple-600 transition-colors">
                <FontAwesomeIcon icon={faEllipsisV} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 py-2">
            <div className="text-center">
              <p className="text-xs text-slate-500">Teachers</p>
              <p className="font-semibold text-slate-700">{dept.teachers}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500">Students</p>
              <p className="font-semibold text-slate-700">{dept.students}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500">Forms</p>
              <p className="font-semibold text-slate-700">{dept.forms}</p>
            </div>
          </div>
          
          <div className="pt-2">
            <div className="flex justify-between text-xs mb-1">
              <span className="font-medium text-slate-600">Performance</span>
              <span className={`font-medium ${dept.performanceTextColor}`}>{dept.performance}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div className={`${dept.performanceColor} h-2 rounded-full`} style={{ width: `${dept.performance}%` }}></div>
            </div>
          </div>
          
          <div className="flex space-x-2 pt-2">
            <button className="flex-1 py-2 text-purple-600 border border-purple-200 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-sm flex items-center justify-center">
              <FontAwesomeIcon icon={faEye} className="mr-1.5" /> View
            </button>
            <button className="flex-1 py-2 text-amber-600 border border-amber-200 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors text-sm flex items-center justify-center">
              <FontAwesomeIcon icon={faEdit} className="mr-1.5" /> Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// Pagination Component
function Pagination() {
  return (
    <div className="p-4 border-t border-slate-100 flex justify-between items-center">
      <span className="text-sm text-slate-500">Showing 2 of 8 departments</span>
      <div className="flex space-x-1">
        <button className="px-3 py-1 rounded border border-slate-200 text-slate-600 hover:bg-slate-50">
          <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
        </button>
        <button className="px-3 py-1 rounded bg-purple-50 border border-purple-200 text-purple-600">1</button>
        <button className="px-3 py-1 rounded border border-slate-200 text-slate-600 hover:bg-slate-50">2</button>
        <button className="px-3 py-1 rounded border border-slate-200 text-slate-600 hover:bg-slate-50">
          <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
        </button>
      </div>
    </div>
  );
}

// CSS Styles
const styles = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

.sidebar {
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
    position: fixed;
    z-index: 50;
    height: 100vh;
  }
  
  .sidebar.active {
    transform: translateX(0);
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Card hover effect */
.stats-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stats-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.05);
}

/* Chart progression bar */
.progress-bar {
  height: 4px;
  background: #e2e8f0;
  border-radius: 2px;
  overflow: hidden;
}

.progress-value {
  height: 100%;
}
`;

export default App;