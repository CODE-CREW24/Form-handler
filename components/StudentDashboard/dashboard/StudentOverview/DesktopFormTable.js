"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye, faEdit, faTrashAlt
} from '@fortawesome/free-solid-svg-icons';

export default function FormSubmissionsTable(props) {
  const personal = props.Personal;
  return (
    <div className="overflow-x-auto hidden md:block">
      <table className="w-full">
        <thead>
          <tr className="bg-white">
            <th className="text-left p-4 text-sm font-medium text-slate-600">Form ID</th>
            <th className="text-left p-4 text-sm font-medium text-slate-600">Type</th>
            <th className="text-left p-4 text-sm font-medium text-slate-600">Date</th>
            <th className="text-left p-4 text-sm font-medium text-slate-600">Status</th>
            <th className="text-right p-4 text-sm font-medium text-slate-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {personal.map((submission) => (
            <tr key={submission.id} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
              <td className="p-4 text-sm font-medium text-slate-700">{submission.id}</td>
              <td className="p-4 text-sm text-slate-700">{submission.type}</td>
              <td className="p-4 text-sm text-slate-700">{submission.date}</td>
              <td className="p-4">
                <span className={`px-3 py-1 text-xs rounded-full ${
                  submission.status === 'Approved' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {submission.status}
                </span>
              </td>
              <td className="p-4">
                <div className="flex justify-end space-x-2">
                  <button className="p-1.5 text-slate-500 hover:text-purple-600 transition-colors">
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                  <button className="p-1.5 text-slate-500 hover:text-purple-600 transition-colors">
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className="p-1.5 text-slate-500 hover:text-purple-600 transition-colors">
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