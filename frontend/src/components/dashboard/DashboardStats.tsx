
import React from 'react';
import Card from '../ui/Card';
import Skeleton from '../ui/Skeleton';
import {DollarSignIcon, PlayIcon, UsersIcon} from 'lucide-react';
import { formatCurrency, formatNumber } from '../../utils/formatter';

interface DashboardStatsProps {
  totalTips?: number;
  totalPlays?: number;
  supporterCount?: number;
  isLoading: boolean;
}

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode; isLoading: boolean }> = ({ title, value, icon, isLoading }) => {
  if (isLoading) {
    return (
      <Card>
        <div className="flex items-center">
          <Skeleton className="w-12 h-12 rounded-full mr-4" />
          <div className="flex-1">
            <Skeleton className="h-4 w-1/3 mb-2" />
            <Skeleton className="h-8 w-1/2" />
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex items-center">
        <div className="p-3 rounded-full bg-primary-blue/10 text-primary-blue mr-4">
          {icon}
        </div>
        <div>
          <p className="text-sm font-sans font-display font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-mono font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </Card>
  );
};

const DashboardStats: React.FC<DashboardStatsProps> = ({ totalTips, totalPlays, supporterCount, isLoading }) => {
  const stats = [
    { title: 'Total Tips', value: totalTips !== undefined ? formatCurrency(totalTips) : '...', icon: <DollarSignIcon className="h-6 w-6"/> },
    { title: 'Total Plays', value: totalPlays !== undefined ? formatNumber(totalPlays) : '...', icon: <PlayIcon className="h-6 w-6"/> },
    { title: 'Supporters', value: supporterCount !== undefined ? formatNumber(supporterCount) : '...', icon: <UsersIcon className="h-6 w-6"/> },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map(stat => (
        <StatCard key={stat.title} {...stat} isLoading={isLoading} />
      ))}
    </div>
  );
};

export default DashboardStats;
