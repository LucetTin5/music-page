import { useRef, useState, useEffect } from 'react';

import { useCategoryContext } from '@/context/category/useCategoryContext';
import { useSwipe } from '@/hooks/useSwipe';
import { getSwipeMultiplier } from '@/lib/swipe';

export const Nav = () => {
  const { currentCategory, categories, changeCategory } = useCategoryContext();

  const navRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  const [translateX, setTranslateX] = useState(0);
  const [boundaries, setBoundaries] = useState({ min: 0, max: 0 });
  const initialXRef = useRef(translateX);

  useEffect(() => {
    if (navRef.current && ulRef.current) {
      const navWidth = navRef.current.offsetWidth;
      const ulWidth = ulRef.current.offsetWidth;
      const minTranslateX = navWidth - ulWidth;

      setBoundaries({ min: minTranslateX, max: 0 });
    }
  }, [categories]);

  const { onMouseDown, onTouchStart } = useSwipe({
    onSwipeStart: () => {
      initialXRef.current = translateX;
    },
    onSwipe: (deltaX) => {
      const multiplier = getSwipeMultiplier();
      setTranslateX((prevTranslateX) => {
        const nextTranslateX = prevTranslateX + deltaX * multiplier;

        const clampedTranslateX = Math.min(
          Math.max(nextTranslateX, boundaries.min),
          boundaries.max,
        );
        return clampedTranslateX;
      });
    },
  });

  return (
    <nav
      ref={navRef}
      className="w-full max-w-md overflow-hidden"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      <ul
        ref={ulRef}
        className="h-10 pl-2 pr-4 flex items-center justify-start min-w-max transition-transform duration-300"
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {categories.map((category) => (
          <li
            key={category.value}
            className={`h-full px-4 py-2 flex items-center justify-center hover:bg-primary-foreground ${
              currentCategory === category.value
                ? 'text-white hover:text-[#aaa]'
                : 'text-black'
            }`}
          >
            <button
              className="w-full font-semibold text-sm"
              onClick={() => changeCategory(category.value)}
            >
              {category.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
