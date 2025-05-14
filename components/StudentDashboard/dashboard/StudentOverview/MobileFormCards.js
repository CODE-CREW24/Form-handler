"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye, faEdit, faTrashAlt, faEllipsisV
} from '@fortawesome/free-solid-svg-icons';

export default function MobileFormSubmissionCards(props) {
  const submissions = props.Personal;
  return (
    <div className="md:hidden divide-y divide-slate-100 space-y-4">
      {submissions.map(submission => (
        <div key={submission.id} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-slate-500">Form ID</span>
              <span className={`px-3 py-1 text-xs rounded-full ${
                submission.status === 'Approved' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                {submission.status}
              </span>
            </div>
            <div className="text-lg font-medium text-slate-800 mb-3">#{submission.id}</div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <span className="block text-sm font-medium text-slate-500 mb-1">Type</span>
                <span className="block text-sm text-slate-800">{submission.type}</span>
              </div>
              <div>
                <span className="block text-sm font-medium text-slate-500 mb-1">Date</span>
                <span className="block text-sm text-slate-800">{submission.date}</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-100 flex divide-x divide-slate-100">
            <button className="flex-1 py-3 text-slate-600 hover:bg-slate-50 transition-colors text-sm flex items-center justify-center">
              <FontAwesomeIcon icon={faEye} className="mr-2" />
              View
            </button>
            <button className="flex-1 py-3 text-slate-600 hover:bg-slate-50 transition-colors text-sm flex items-center justify-center">
              <FontAwesomeIcon icon={faEdit} className="mr-2" />
              Edit
            </button>
            <button className="flex-1 py-3 text-slate-600 hover:bg-slate-50 transition-colors text-sm flex items-center justify-center">
              <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}