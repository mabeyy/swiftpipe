export type PricingPlan = {
  id: string
  title: string
  description: string
  monthly: number
}

export const pricingData: PricingPlan[] = [
  {
    id: 'leak-repair',
    title: 'Leak Repair',
    description: 'Detection and repair of pipe and fixture leaks to prevent water damage.',
    monthly: 1200,
  },
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning',
    description: 'Removal of clogs and blockages to restore proper water flow.',
    monthly: 1800,
  },
  {
    id: 'toilet-repair',
    title: 'Toilet Repair',
    description: 'Fixing leaks, flushing issues, and toilet blockages.',
    monthly: 2000,
  },
  {
    id: 'pipe-installation',
    title: 'Pipe Installation',
    description: 'Professional installation or replacement of plumbing pipes.',
    monthly: 4500,
  },
  {
    id: 'water-heater-repair',
    title: 'Water Heater Repair',
    description: 'Repair and maintenance to restore hot water safely and efficiently.',
    monthly: 3500,
  },
  {
    id: 'emergency-plumbing',
    title: 'Emergency Plumbing',
    description: '24/7 urgent plumbing service for burst pipes and severe leaks.',
    monthly: 5000,
  },
]
