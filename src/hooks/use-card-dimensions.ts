import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';

function useCardDimensions(padding = 15, gap = 5) {
  const window = useWindowDimensions();

  const dimensions = useMemo(() => {
    const width = window.width / 2 - padding - gap;
    return { width, height: width * 1.5 };
  }, [window.width, padding, gap]);

  return dimensions;
}

export default useCardDimensions;
