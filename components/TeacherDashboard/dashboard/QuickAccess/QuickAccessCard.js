"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

export default function QuickAccessCard({ icon, iconBg, iconColor, title, description }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm flex space-x-4 items-center w-full">
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