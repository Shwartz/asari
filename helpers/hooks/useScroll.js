import {useState, useEffect} from 'react'

export function useScroll() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(
    typeof window === "undefined" || !window.document ? 0 : document.body.getBoundingClientRect()
  );
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  const [scrollDirection, setScrollDirection] = useState();

  let ticking = false;

  const updateScrollValues = () => {
    setBodyOffset(typeof window === "undefined" || !window.document ? 0 : document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
    setLastScrollTop(-bodyOffset.top);
  };

  const listener = e => {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateScrollValues();
        ticking = false;
      });

      ticking = true;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection
  };
}

// https://gist.github.com/joshuacerbito/ea318a6a7ca4336e9fadb9ae5bbb87f4
