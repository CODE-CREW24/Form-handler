"use client"

import StatCard from './StatCard';
import {
  faChalkboardTeacher, faBuilding,
  faFileAlt, faUserGraduate,faClock,faCircleCheck,faCircleXmark
} from '@fortawesome/free-solid-svg-icons';

export default function StatsCards() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      <StatCard 
        title="My students"
        value="45"
        icon={faUserGraduate}
        iconBg="bg-purple-100"
        iconColor="text-purple-600"
      />
      
      <StatCard 
        title="Pending Forms"
        value="8"
        icon={faClock}
        iconBg="bg-indigo-100"
        iconColor="text-indigo-600"
      />
      
      <StatCard 
        title="Appoved Forms"
        value="127"
        icon={faCircleCheck}
        iconBg="bg-blue-100"
        iconColor="text-blue-600"
      />
      
      <StatCard 
        title="Rejected Forms"
        value="1250"
        icon={faCircleXmark}
        iconBg="bg-sky-100"
        iconColor="text-sky-600"
      />
    </section>
  );
}