import { faLaptopCode, faCalculator } from '@fortawesome/free-solid-svg-icons';

export const departments = [
  {
    id: 1,
    name: 'Computer Science',
    icon: faLaptopCode,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    head: { name: 'Prof. Johnson', initials: 'PJ' },
    teachers: 12,
    students: 320,
    forms: 45,
    performance: 85,
    performanceColor: 'bg-emerald-500',
    performanceTextColor: 'text-emerald-600'
  },
  {
    id: 2,
    name: 'Mathematics',
    icon: faCalculator,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    head: { name: 'Dr. Williams', initials: 'DW' },
    teachers: 8,
    students: 280,
    forms: 32,
    performance: 76,
    performanceColor: 'bg-blue-500',
    performanceTextColor: 'text-blue-600'
  }
];