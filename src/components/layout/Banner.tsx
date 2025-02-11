import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
} from '@/components/ui/carousel';
import { BannerType } from '@/types/banner';

const banners: BannerType[] = [
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

export const Banner = () => {
  return (
    <div className="w-full">
      <Carousel className="w-full py-4">
        <CarouselContent className="p-2 flex gap-2 ml-0">
          {banners.map((banner) => (
            <CarouselItem
              key={banner.id}
              className="rounded-md basis-full flex flex-col shadow-lg p-0"
            >
              {banner.link ? (
                <a href={banner.link} target="_blank" rel="noopener noreferrer">
                  <div className="w-full min-h-[150px] h-full bg-gray-200 rounded-t-md" />
                </a>
              ) : (
                <div className="w-full min-h-[150px] h-full bg-gray-200 rounded-t-md" />
              )}
              {/* 
                TODO: 배너 이미지 추가 시 사용
               <img
                src={banner.image}
                alt={banner.title}
                className="w-full object-fit rounded-sm"
              /> */}
              <div className="flex flex-col gap-2 px-1 py-2">
                <div className="flex justify-between items-center px-1">
                  <p className="text-sm font-semibold max-w-[70%] text-ellipsis overflow-hidden whitespace-nowrap">
                    {banner.title}
                  </p>
                  {banner.button && (
                    <a
                      href={banner.button.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-pink-400 border border-pink-400 rounded-lg px-3"
                    >
                      {banner.button.text}
                    </a>
                  )}
                </div>
                {/* TODO: Timezone 필요 시 수정 필요 */}
                {banner.startDateTime && banner.endDateTime && (
                  <div className="flex justify-end items-center px-1">
                    <p className="text-xs">
                      <span>{banner.startDateTime}</span>
                      <span>&nbsp;~&nbsp;</span>
                      <span>{banner.endDateTime}</span>
                    </p>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselIndicator mainColor="bg-pink-400" subColor="bg-gray-300" />
      </Carousel>
    </div>
  );
};
