"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus, faDownload
} from '@fortawesome/free-solid-svg-icons';
import { students } from '@/data/student';
import DesktopDepartmentTable from './DesktopDepartmentStudentTable';
import MobileStudentFormCards from './MobileDepartmentStudentCards';
import Pagination from '../Pagination';

export default function DepartmentOverview() {
  return (
    <section className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-5 border-b border-slate-100">
        <div className="flex flex-col md:flex-row justify-between md:items-center space-y-3 md:space-y-0">
          <div>
            <h2 className="text-xl font-semibold text-slate-800">Form Requests</h2>
            <p className="text-slate-500 text-sm">Review and respond to student requests</p>
          </div>
          
        </div>
      </div>
      
      {/* Desktop Table */}
      <DesktopDepartmentTable students={students} />

      {/* Mobile Cards */}
      <MobileStudentFormCards students={students} />
      
      {/* Pagination */}
      <Pagination />
    </section>
  );
}