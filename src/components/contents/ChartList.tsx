import { ArrowBigDown, ArrowBigUp, Minus } from 'lucide-react';
import React from 'react';

import { useChartList } from '@/components/contents/useChartList';
import { ChartContent } from '@/types/contents';

const upDownMap = {
  up: <ArrowBigUp className="w-4 h-4 stroke-blue-400" />,
  down: <ArrowBigDown className="w-4 h-4 stroke-gray-400" />,
  same: <Minus className="w-4 h-4 stroke-gray-400" />,
} satisfies Record<ChartContent['upDown'], React.ReactNode>;

const ChartItem = React.forwardRef<HTMLDivElement, ChartContent>(
  ({ image, rank, artist, title, upDown }, ref) => {
    return (
      <div
        className="flex h-14 w-full items-center rounded-sm bg-white"
        ref={ref}
      >
        <img
          src={image}
          alt={title}
          className="object-fit w-14 h-14 rounded-sm"
        />
        <div className="flex flex-col px-2 items-center">
          <p className="text-sm font-semibold">{rank}</p>
          {upDownMap[upDown]}
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-xs">{artist}</p>
        </div>
      </div>
    );
  },
);

export const ChartList = () => {
  const { chartList, lastItemRef } = useChartList();
  return (
    <div className="flex flex-col gap-4">
      {chartList.map((chartItem, index) => (
        <ChartItem
          key={chartItem.id}
          {...chartItem}
          ref={index === chartList.length - 1 ? lastItemRef : null}
        />
      ))}
    </div>
  );
};
