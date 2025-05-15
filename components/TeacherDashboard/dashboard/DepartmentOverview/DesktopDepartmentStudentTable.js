"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,  faCheck,faXmark
} from '@fortawesome/free-solid-svg-icons';

export default function DesktopDepartmentTable(props) {
  const students = props.students || [];

  // Helper function to get appropriate background color class based on status
  const getStatusBgColor = (status) => {
    return status === 'Approved' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-red-100 text-red-800';
  };

  return (
    <div className="overflow-x-auto hidden md:block">
      <table className="w-full table-auto min-w-full">
        <thead>
          <tr className="bg-slate-50">
            <th className="text-left p-4 text-sm font-medium text-slate-500 w-1/4">Student</th>
            <th className="text-left p-4 text-sm font-medium text-slate-500 w-1/6">Roll No</th>
            <th className="text-left p-4 text-sm font-medium text-slate-500 w-1/6">Form Type</th>
            <th className="text-left p-4 text-sm font-medium text-slate-500 w-1/6">Submitted</th>
            <th className="text-center p-4 text-sm font-medium text-slate-500 w-1/6">Status</th>
            <th className="text-right p-4 text-sm font-medium text-slate-500 w-1/6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((dept, index) => (
            <tr key={index} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
              <td className="p-4">
                <div className="truncate max-w-xs text-slate-700">
                  {dept.name}
                </div>
              </td>
              <td className="p-4 text-slate-700">{dept.rollNo}</td>
              <td className="p-4 text-slate-700">{dept.type}</td>
              <td className="p-4 text-slate-700">{dept.date}</td>
              <td className="p-4 text-center">
                <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium ${getStatusBgColor(dept.status)}`}>
                  {dept.status}
                </span>
              </td>
              <td className="p-4 text-right">
                <div className="flex justify-end space-x-2">
                  <button className="p-1.5 text-slate-500 hover:text-purple-600 transition-colors" aria-label="View">
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                  <button className="p-1.5 text-slate-500 hover:text-green-600 transition-colors" aria-label="Edit">
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                  <button className="p-1.5 text-slate-500 hover:text-rose-600 transition-colors" aria-label="Delete">
                    <FontAwesomeIcon icon={faXmark} />
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