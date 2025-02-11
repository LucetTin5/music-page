import { useRef, useCallback, useEffect } from 'react';

interface SwipeCallbacks {
  onSwipeStart?: (e: MouseEvent | TouchEvent) => void;
  onSwipe?: (
    deltaX: number,
    deltaY: number,
    e: MouseEvent | TouchEvent,
  ) => void;
  onSwipeEnd?: (e: MouseEvent | TouchEvent) => void;
}

export const useSwipe = ({
  onSwipeStart,
  onSwipe,
  onSwipeEnd,
}: SwipeCallbacks) => {
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const isSwipingRef = useRef(false);

  // 마우스 이동 시, 위치 차이를 계산하여 onSwipe 콜백 실행
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isSwipingRef.current) return;
      const deltaX = e.clientX - startXRef.current;
      const deltaY = e.clientY - startYRef.current;
      if (onSwipe) {
        onSwipe(deltaX, deltaY, e);
      }
    },
    [onSwipe],
  );

  // 마우스 업 시 swipe 종료 처리
  const handleMouseUp = useCallback(
    (e: MouseEvent) => {
      if (!isSwipingRef.current) return;
      isSwipingRef.current = false;
      if (onSwipeEnd) {
        onSwipeEnd(e);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    },
    [onSwipeEnd, handleMouseMove],
  );

  // 마우스 다운 시 swipe 시작, 이벤트 리스너 등록
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      isSwipingRef.current = true;
      startXRef.current = e.clientX;
      startYRef.current = e.clientY;
      if (onSwipeStart) {
        onSwipeStart(e.nativeEvent as MouseEvent);
      }
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    },
    [onSwipeStart, handleMouseMove, handleMouseUp],
  );

  // 터치 이동 시, 위치 차이를 계산하여 onSwipe 콜백 실행
  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isSwipingRef.current) return;
      if (e.touches.length !== 1) return; // 멀티터치는 무시
      const touch = e.touches[0];
      const deltaX = touch.clientX - startXRef.current;
      const deltaY = touch.clientY - startYRef.current;
      if (onSwipe) {
        onSwipe(deltaX, deltaY, e);
      }
    },
    [onSwipe],
  );

  // 터치 종료 시 swipe 종료 처리
  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      if (!isSwipingRef.current) return;
      isSwipingRef.current = false;
      if (onSwipeEnd) {
        onSwipeEnd(e);
      }
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
    },
    [onSwipeEnd, handleTouchMove],
  );

  // 터치 시작 시 swipe 시작, 이벤트 리스너 등록
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length !== 1) return;
      isSwipingRef.current = true;
      const touch = e.touches[0];
      startXRef.current = touch.clientX;
      startYRef.current = touch.clientY;
      if (onSwipeStart) {
        onSwipeStart(e.nativeEvent as TouchEvent);
      }
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
      window.addEventListener('touchcancel', handleTouchEnd);
    },
    [onSwipeStart, handleTouchMove, handleTouchEnd],
  );

  useEffect(() => {
    // cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  return {
    onMouseDown: handleMouseDown,
    onTouchStart: handleTouchStart,
  };
};
