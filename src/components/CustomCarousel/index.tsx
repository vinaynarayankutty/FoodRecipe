import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {screenDimensions} from '../../utils/responsive';
import styles from './Styles';

const PAGE_WIDTH = screenDimensions.width;

interface CustomCarouselProps<T> {
  width?: number;
  height?: number;
  data: T[];
  renderItem: (item: {item: T; index: number}) => React.ReactElement;
}

function CustomCarousel<T>({
  width = PAGE_WIDTH * 0.55,
  height = PAGE_WIDTH / 2,
  data,
  renderItem,
}: CustomCarouselProps<T>) {
  return (
    <Carousel
      vertical={false}
      width={width}
      height={height}
      loop={false}
      style={styles.container}
      autoPlay={false}
      data={data}
      pagingEnabled={true}
      renderItem={renderItem}
    />
  );
}

export default CustomCarousel;
