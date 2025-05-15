"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye, faFile, faCheck, faXmark
} from '@fortawesome/free-solid-svg-icons';

export default function MobileStudentFormCards({ students }) {
  // Helper function to get appropriate colors based on status
  const getStatusColors = (status) => {
    if (status === 'Approved') {
      return {
        bgColor: 'bg-green-100',
        textColor: 'text-green-800',
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600'
      };
    } else {
      return {
        bgColor: 'bg-red-100',
        textColor: 'text-red-800',
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600'
      };
    }
  };

  return (
    <div className="md:hidden divide-y divide-slate-100 space-y-4">
      {students.map((student, index) => {
        const statusColors = getStatusColors(student.status);

        return (
          <div key={index} className="bg-white border border-slate-200 rounded-lg shadow-sm">
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg ${statusColors.iconBg} flex items-center justify-center ${statusColors.iconColor}`}>
                    <FontAwesomeIcon icon={faFile} />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 truncate max-w-[180px]">{student.name}</h4>
                    <p className="text-sm text-slate-500">{student.rollNo}</p>
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-2 gap-4 py-2">
                <div>
                  <p className="text-xs text-slate-500">Form Type</p>
                  <p className="font-semibold text-slate-700">{student.type}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Submitted</p>
                  <p className="font-semibold text-slate-700">{student.date}</p>
                </div>
              </div>

              <div className="pt-2">
                <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium ${statusColors.bgColor} ${statusColors.textColor}`}>
                  {student.status}
                </span>
              </div>

              <div className="flex space-x-2 pt-2">
                <button className="flex-1 py-2 text-purple-600 border border-purple-200 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-sm flex items-center justify-center">
                  <FontAwesomeIcon icon={faEye} className="mr-1.5" /> View
                </button>
                <button className="flex-1 py-2 text-green-600 border border-green-200 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-sm flex items-center justify-center">
                  <FontAwesomeIcon icon={faCheck} className="mr-1.5" /> Approve
                </button>
                <button className="flex-1 py-2 text-red-600 border border-red-200 bg-red-50 rounded-lg hover:bg-red-100 transition-colors text-sm flex items-center justify-center">
                  <FontAwesomeIcon icon={faXmark} className="mr-1.5" /> Reject
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}