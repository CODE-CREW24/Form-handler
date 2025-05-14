"use client"

import StatsCards from './Stats/StatsCards';
import QuickAccessCards from './QuickAccess/QuickAccessCards';
import DepartmentOverview from './StudentOverview/StudentOverview';

export default function ContentContainer() {
  return (
    <div className="container mx-auto p-4 md:p-6 space-y-6">
      <StatsCards />
      <QuickAccessCards />
      <DepartmentOverview />
    </div>
  );
}