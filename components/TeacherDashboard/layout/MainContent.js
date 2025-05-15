"use client"

import Header from '@/components/TeacherDashboard/dashboard/Header';
import ContentContainer from '@/components/TeacherDashboard/dashboard/ContentContainer';

export default function MainContent() {
  return (
    <main className="flex-1 min-h-screen">
      <Header />
      <ContentContainer />
    </main>
  );
}