import { useMediaQuery } from '@mountain-ui/react-hooks';
export function useViewPort(){
  const isMobile = useMediaQuery('screen and (min-width: 1px) and (max-width: 768px)');
  const isTablet = useMediaQuery('screen and (min-width: 514px) and (max-width: 1025px)');

  return {
    isMobile,
    isTablet,
    isDesktop: !isMobile && !isTablet
  };
}