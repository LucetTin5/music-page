import { BannerType } from '@/types/banner';

export const banners: BannerType[] = [
  {
    id: 1,
    image: 'https://picsum.photos/400/150',
    link: 'https://www.hanteochart.com/',
    title: '[배너] 1번 배너, 제목, 제목의 연장선, 제목의 연장선',
    startDateTime: '2025-01-01 00:00',
    endDateTime: '2025-12-31 10:15',
    button: {
      text: '더보기',
      link: 'https://www.hanteochart.com/',
    },
  },
  {
    id: 2,
    image: 'https://picsum.photos/400/150',
    link: 'https://google.com',
    title: '[배너] 2번 배너, 제목',
    startDateTime: '2025-01-01 00:00',
    endDateTime: '2025-12-31 10:15',
  },
  {
    id: 3,
    image: 'https://picsum.photos/400/150',
    link: 'https://naver.com',
    title: '[배너] 3번 배너, 제목',
    startDateTime: '2025-01-01 00:00',
    endDateTime: '2025-12-31 10:15',
  },
  {
    id: 4,
    image: 'https://picsum.photos/400/150',
    title: '[배너] 4번 배너, 제목',
    startDateTime: '2025-01-01 00:00',
    endDateTime: '2025-12-31 10:15',
  },
  {
    id: 5,
    image: 'https://picsum.photos/400/150',
    title: '[배너] 5번 배너, 제목',
    startDateTime: '2025-01-01 00:00',
    endDateTime: '2025-12-31 10:15',
  },
];
