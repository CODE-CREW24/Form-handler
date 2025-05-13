"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye, faEdit, faTrashAlt
} from '@fortawesome/free-solid-svg-icons';

export default function DesktopDepartmentTable({ departments }) {
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