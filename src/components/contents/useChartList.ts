import { useCallback, useRef, useState } from 'react';

import { ChartContents } from '@/mock/contents';
import { ChartContent } from '@/types/contents';

const PAGE_SIZE = 20;

export const useChartList = () => {
  const [page, setPage] = useState(0);
  const [chartList, setChartList] = useState<ChartContent[]>(() =>
    ChartContents.slice(0, PAGE_SIZE),
  );

  const totalPages = Math.ceil(ChartContents.length / PAGE_SIZE);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && page < totalPages) {
          const newPage = page + 1;
          setPage(() => newPage);

          const start = newPage * PAGE_SIZE;
          const end = start + PAGE_SIZE;
          setChartList((prev) => [...prev, ...ChartContents.slice(start, end)]);
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [page, totalPages],
  );

  return {
    chartList,
    lastItemRef,
  };
};
