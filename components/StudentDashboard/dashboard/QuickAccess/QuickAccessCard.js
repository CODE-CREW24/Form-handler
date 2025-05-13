"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faBell,
  faFileCirclePlus
} from '@fortawesome/free-solid-svg-icons';

export default function QuickAccessCard({ icon, iconBg, iconColor, title, description }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex items-center w-full">
      <div className={`${iconBg} p-3 rounded-lg ${iconColor} flex-shrink-0`}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="ml-3 flex-grow min-w-0">
        <h3 className="font-medium text-sm md:text-base">{title}</h3>
        <p className="text-slate-500 text-xs md:text-sm">{description}</p>
      </div>
      <button className="ml-auto bg-slate-100 hover:bg-slate-200 text-slate-600 p-2 rounded-lg flex-shrink-0">
        <FontAwesomeIcon icon={faChevronRight} size="sm" />
      </button>
    </div>
  );
}