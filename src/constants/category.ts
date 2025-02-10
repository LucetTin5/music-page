export const CATEGORY = [
  {
    label: '차트',
    value: 'chart',
  },
  {
    label: '이벤트',
    value: 'event',
  },
  {
    label: '뉴스',
    value: 'news',
  },
  {
    label: '스토어',
    value: 'store',
  },
  {
    label: '충전소',
    value: 'charge',
  },
  {
    label: '라벨2',
    value: 'label2',
  },
  {
    label: '라벨3',
    value: 'label3',
  },
] as const;

export type Category = (typeof CATEGORY)[number];
