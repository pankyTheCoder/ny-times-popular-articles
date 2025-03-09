import React from 'react';

interface PeriodSelectorProps {
  currentPeriod: 1 | 7 | 30;
  onChange: (period: 1 | 7 | 30) => void;
}

const PeriodSelector: React.FC<PeriodSelectorProps> = ({ currentPeriod, onChange }) => {
  const periods: Array<{ value: 1 | 7 | 30; label: string }> = [
    { value: 1, label: '1 Day' },
    { value: 7, label: '7 Days' },
    { value: 30, label: '30 Days' },
  ];

  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex rounded-lg p-1 bg-secondary">
        {periods.map((period) => (
          <button
            key={period.value}
            onClick={() => onChange(period.value)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
              currentPeriod === period.value
                ? 'bg-white shadow-sm text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            aria-current={currentPeriod === period.value ? 'true' : 'false'}
          >
            {period.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PeriodSelector;
