"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisV, faEye, faEdit
} from '@fortawesome/free-solid-svg-icons';

export default function MobileDepartmentCards({ departments }) {
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