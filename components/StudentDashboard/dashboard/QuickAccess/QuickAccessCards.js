"use client"

import QuickAccessCard from './QuickAccessCard';
import {
  faBell, faCirclePlus
} from '@fortawesome/free-solid-svg-icons';

export default function QuickAccessCards() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6'>
      <QuickAccessCard 
        icon={faBell}
        iconBg="bg-amber-100"
        iconColor="text-amber-600"
        title="Pending Requests"
        description="15 items require your attention"
      />

      <QuickAccessCard 
        icon={faCirclePlus}
        iconBg="bg-purple-100"
        iconColor="text-purple-600"
        title="Submite New Form"
        description="Submit a new form for approval"
      />
      
      </div>
     
   
  );
}