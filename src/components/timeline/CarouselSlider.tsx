import React, { useState } from "react";

export default function Carousel({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);
  const CARDS = 10;
  const MAX_VISIBILITY = 3;


  return (
    <div className="relative w-538 h-614 perspective-500 transform-style-preserve-3d">
      {active > 0 && (
        <button
          className="text-black text-5xl absolute flex items-center justify-center top-1/2 z-2 cursor-pointer select-none bg-transparent border-none transform translate-x-[-120%] translate-y-[-50%]"
          onClick={() => setActive((i) => i - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="53"
            viewBox="0 0 53 53"
            fill="none"
            className="rotate-180"
          >
            <path
              d="M26.0856 5.57227C21.9075 5.57227 17.8233 6.8112 14.3494 9.13241C10.8754 11.4536 8.16784 14.7528 6.56897 18.6129C4.97009 22.4729 4.55175 26.7203 5.36685 30.8181C6.18195 34.9159 8.19388 38.68 11.1482 41.6343C14.1025 44.5886 17.8666 46.6006 21.9644 47.4157C26.0622 48.2308 30.3096 47.8124 34.1696 46.2135C38.0297 44.6147 41.3289 41.9071 43.6501 38.4331C45.9713 34.9592 47.2102 30.875 47.2102 26.6969C47.2043 21.0961 44.9768 15.7264 41.0164 11.7661C37.0561 7.80571 31.6864 5.57818 26.0856 5.57227ZM35.3601 27.8466L28.8602 34.3465C28.5553 34.6514 28.1418 34.8227 27.7106 34.8227C27.2794 34.8227 26.8658 34.6514 26.5609 34.3465C26.256 34.0416 26.0847 33.628 26.0847 33.1968C26.0847 32.7656 26.256 32.352 26.5609 32.0471L30.2882 28.3219H17.9607C17.5298 28.3219 17.1164 28.1507 16.8117 27.8459C16.507 27.5412 16.3358 27.1279 16.3358 26.6969C16.3358 26.2659 16.507 25.8526 16.8117 25.5479C17.1164 25.2431 17.5298 25.0719 17.9607 25.0719H30.2882L26.5609 21.3467C26.256 21.0418 26.0847 20.6282 26.0847 20.197C26.0847 19.7658 26.256 19.3523 26.5609 19.0474C26.8658 18.7424 27.2794 18.5711 27.7106 18.5711C28.1418 18.5711 28.5553 18.7424 28.8602 19.0474L35.3601 25.5472C35.5112 25.6982 35.6311 25.8774 35.7128 26.0746C35.7946 26.2719 35.8367 26.4834 35.8367 26.6969C35.8367 26.9105 35.7946 27.1219 35.7128 27.3192C35.6311 27.5165 35.5112 27.6957 35.3601 27.8466Z"
              fill="white"
            />
          </svg>
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="absolute w-full h-full transform
          rotate-y calc(var(--offset) * 50deg)
          scale-y calc(1 + var(--abs-offset) * -0.4)
          translate-z calc(var(--abs-offset) * -30rem)
          translate-x calc(var(--direction) * -5rem)
          transition-all duration-300 ease-out"
          style={{
            //@ts-ignore
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 5,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            pointerEvents: active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button
          className="text-black text-5xl absolute flex items-center justify-center top-1/2 z-2 cursor-pointer select-none bg-transparent border-none right-0 transform translate-x-[120%] translate-y-[-50%]"
          onClick={() => setActive((i) => i + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="53"
            viewBox="0 0 53 53"
            fill="none"
          >
            <path
              d="M26.0856 5.57227C21.9075 5.57227 17.8233 6.8112 14.3494 9.13241C10.8754 11.4536 8.16784 14.7528 6.56897 18.6129C4.97009 22.4729 4.55175 26.7203 5.36685 30.8181C6.18195 34.9159 8.19388 38.68 11.1482 41.6343C14.1025 44.5886 17.8666 46.6006 21.9644 47.4157C26.0622 48.2308 30.3096 47.8124 34.1696 46.2135C38.0297 44.6147 41.3289 41.9071 43.6501 38.4331C45.9713 34.9592 47.2102 30.875 47.2102 26.6969C47.2043 21.0961 44.9768 15.7264 41.0164 11.7661C37.0561 7.80571 31.6864 5.57818 26.0856 5.57227ZM35.3601 27.8466L28.8602 34.3465C28.5553 34.6514 28.1418 34.8227 27.7106 34.8227C27.2794 34.8227 26.8658 34.6514 26.5609 34.3465C26.256 34.0416 26.0847 33.628 26.0847 33.1968C26.0847 32.7656 26.256 32.352 26.5609 32.0471L30.2882 28.3219H17.9607C17.5298 28.3219 17.1164 28.1507 16.8117 27.8459C16.507 27.5412 16.3358 27.1279 16.3358 26.6969C16.3358 26.2659 16.507 25.8526 16.8117 25.5479C17.1164 25.2431 17.5298 25.0719 17.9607 25.0719H30.2882L26.5609 21.3467C26.256 21.0418 26.0847 20.6282 26.0847 20.197C26.0847 19.7658 26.256 19.3523 26.5609 19.0474C26.8658 18.7424 27.2794 18.5711 27.7106 18.5711C28.1418 18.5711 28.5553 18.7424 28.8602 19.0474L35.3601 25.5472C35.5112 25.6982 35.6311 25.8774 35.7128 26.0746C35.7946 26.2719 35.8367 26.4834 35.8367 26.6969C35.8367 26.9105 35.7946 27.1219 35.7128 27.3192C35.6311 27.5165 35.5112 27.6957 35.3601 27.8466Z"
              fill="white"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
