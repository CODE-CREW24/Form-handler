"use client"

import Header from '@/components/StudentDashboard/dashboard/Header';
import ContentContainer from '@/components/StudentDashboard/dashboard/ContentContainer';

export default function MainContent() {
  return (
    <main className="flex-1 min-h-screen">
      <Header />
      <ContentContainer />
    </main>
  );
}