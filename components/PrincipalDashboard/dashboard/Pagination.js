"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft, faChevronRight
} from '@fortawesome/free-solid-svg-icons';

export default function Pagination() {
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