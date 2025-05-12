"use client"

import StatCard from './StatCard';
import {
  faChalkboardTeacher, faBuilding,
  faFileAlt, faUserGraduate
} from '@fortawesome/free-solid-svg-icons';

export default function StatsCards() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      <StatCard 
        title="Total Teachers"
        value="45"
        icon={faChalkboardTeacher}
        iconBg="bg-purple-100"
        iconColor="text-purple-600"
      />
      
      <StatCard 
        title="Departments"
        value="8"
        icon={faBuilding}
        iconBg="bg-indigo-100"
        iconColor="text-indigo-600"
      />
      
      <StatCard 
        title="Active Forms"
        value="127"
        icon={faFileAlt}
        iconBg="bg-blue-100"
        iconColor="text-blue-600"
      />
      
      <StatCard 
        title="Students"
        value="1250"
        icon={faUserGraduate}
        iconBg="bg-sky-100"
        iconColor="text-sky-600"
      />
    </section>
  );
}