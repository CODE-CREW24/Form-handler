"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus, faDownload
} from '@fortawesome/free-solid-svg-icons';
import { departments } from '@/data/department';
import DesktopDepartmentTable from './DesktopDepartmentTable';
import MobileDepartmentCards from './MobileDepartmentCards';
import Pagination from '../Pagination';

export default function DepartmentOverview() {
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