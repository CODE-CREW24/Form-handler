"use client"

import QuickAccessCard from './QuickAccessCard';
import {
  faBell
} from '@fortawesome/free-solid-svg-icons';

export default function QuickAccessCards() {
  return (
    
      <QuickAccessCard 
        icon={faBell}
        iconBg="bg-amber-100"
        iconColor="text-amber-600"
        title="Pending Approvals"
        description="15 items require your attention"
      />
      
     
     
   
  );
}