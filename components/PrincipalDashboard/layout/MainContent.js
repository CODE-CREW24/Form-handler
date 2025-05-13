"use client"

import Header from '@/components/PrincipalDashboard/dashboard/Header';
import ContentContainer from '@/components/PrincipalDashboard/dashboard/ContentContainer';

export default function MainContent() {
  return (
    <main className="flex-1 min-h-screen">
      <Header />
      <ContentContainer />
    </main>
  );
}