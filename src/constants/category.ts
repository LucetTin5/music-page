export const CATEGORY = [
  {
    label: '차트',
    value: 'chart',
    contentTitle: '차트 컨텐츠',
  },
  {
    label: '이벤트',
    value: 'event',
    contentTitle: '이벤트 컨텐츠',
  },
  {
    label: '뉴스',
    value: 'news',
    contentTitle: '뉴스 컨텐츠',
  },
  {
    label: '스토어',
    value: 'store',
    contentTitle: '스토어 컨텐츠',
  },
  {
    label: '충전소',
    value: 'charge',
    contentTitle: '충전소 컨텐츠',
  },
  {
    label: '라벨2',
    value: 'label2',
    contentTitle: '라벨2 컨텐츠',
  },
  {
    label: '라벨3',
    value: 'label3',
    contentTitle: '라벨3 컨텐츠',
  },
] as const;

export type Category = (typeof CATEGORY)[number];
