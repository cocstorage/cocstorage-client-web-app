import { useEffect, useLayoutEffect, useRef } from 'react';

import useKeyboardStore from '@stores/keyboard';

// iOS Safari 환경에서만 동작하는 hook
// 키보드 활성화 시 키보드 높이 만큼 하단에 공백이 생기는 문제 대응을 위함
export default function useFillKeyboardArea() {
  const { isFocus, handleFocus, virtualHeight, setVirtualHeight } = useKeyboardStore();

  const basicUIRootRef = useRef<HTMLDivElement>();
  const activeActivityRef = useRef<HTMLDivElement>();
  const appBarRef = useRef<HTMLDivElement>();
  const appBarStyleRef = useRef('');
  const virtualHeightRef = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
    const [basicUIRoot] = document.getElementsByClassName('basic-ui-root');

    basicUIRootRef.current = basicUIRoot as HTMLDivElement;
    activeActivityRef.current = basicUIRoot?.querySelector(
      '[data-stackflow-activity-is-active=true]'
    ) as HTMLDivElement;
    // TODO AppBar 를 찾을 수 있는 다른 좋은 방법 강구, 혹은 basicUIPlugin 을 걷어내고 직접 만들 때 이 부분 고려해서 만들면 자연스레 해결될 부분?
    appBarRef.current = activeActivityRef.current?.childNodes[1] as HTMLDivElement;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!virtualHeight && isFocus) {
        setVirtualHeight(window.scrollY);
      } else if (virtualHeight && !isFocus) {
        setVirtualHeight(0);
      }

      if (virtualHeight && isFocus) {
        window.scrollTo({
          top: virtualHeight
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [virtualHeight, isFocus, setVirtualHeight]);

  useEffect(() => {
    if (virtualHeight && isFocus) {
      appBarStyleRef.current = ` position: fixed; transition: transform 0.4s; transform: translateY(${virtualHeight}px)`;
      appBarRef.current?.setAttribute(
        'style',
        `${appBarRef.current?.getAttribute('style')}${appBarStyleRef.current}`
      );

      const virtualHeightElement = document.createElement('div');
      virtualHeightElement.id = 'virtual-height-element';
      virtualHeightElement.style.minHeight = `${virtualHeight}px`;
      virtualHeightRef.current = virtualHeightElement;

      const appScreenContent = window?.appScreenContent;

      appScreenContent?.insertBefore(virtualHeightRef.current, appScreenContent.firstChild);
      appScreenContent?.scrollTo({
        top: appScreenContent.scrollTop + virtualHeight
      });
    } else if (virtualHeight && !isFocus) {
      appBarRef.current?.setAttribute(
        'style',
        `${appBarRef.current?.getAttribute('style')?.replace(appBarStyleRef.current, '')}`
      );

      const appScreenContent = window?.appScreenContent;

      appScreenContent?.scrollTo({
        top: appScreenContent.scrollTop - virtualHeight
      });

      virtualHeightRef.current?.remove();
      virtualHeightRef.current = undefined;
    }
  }, [virtualHeight, isFocus]);

  return { handleFocus };
}
