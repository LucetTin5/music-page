// px단위로 움직일 때, 움직임을 배율로 변환하여 크게 움직일 수 있게
export const getSwipeMultiplier = () => {
  if (window.innerWidth < 768) {
    return 10;
  }
  return 50;
};
