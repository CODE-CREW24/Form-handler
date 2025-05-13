"use client"

import StatCard from './StatCard';
import {
  faFileAlt, faClock
} from '@fortawesome/free-solid-svg-icons';

export default function StatsCards() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
      <StatCard 
        title="Submitted forms"
        value="45"
        icon={faFileAlt}
        iconBg="bg-purple-100"
        iconColor="text-purple-600"
      />
      
      <StatCard 
        title="Pending forms"
        value="8"
        icon={faClock}
        iconBg="bg-orange-100"
        iconColor="text-orange-600"
      />
    </section>
  );
}