import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
} from '@/components/ui/carousel';
import { banners } from '@/mock/banner';

export const Banner = () => {
  return (
    <div className="w-full">
      <Carousel
        className="w-full py-4"
        opts={{
          loop: true,
          align: 'start',
        }}
      >
        <CarouselContent className="p-2 flex gap-2 ml-2">
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
