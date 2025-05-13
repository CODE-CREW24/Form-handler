"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function StatCard({ 
  title, 
  value, 
  icon, 
  iconBg, 
  iconColor, 
}) {
  return (
    <div className="stats-card bg-white p-5 rounded-xl shadow-sm">
      <div className="flex justify-between">
        <div>
          <h3 className="text-sm text-slate-500 font-medium">{title}</h3>
          <p className="text-2xl font-bold text-slate-800 mt-1">{value}</p>
        </div>
        <div className={`${iconBg} p-3 rounded-lg ${iconColor}`}>
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
      <div className="mt-3">
       
        
      </div>
    </div>
  );
}