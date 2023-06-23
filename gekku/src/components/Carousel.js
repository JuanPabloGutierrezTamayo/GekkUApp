import { FlatList } from 'react-native';

import Slide from './Slide';

const Carousel = ({ slideList }) => {
  return (
    <FlatList
      data={slideList}
      style={{ flex: 1 }}
      renderItem={({item}) => <Slide data={item} />}
    />
  );
}

export default Carousel;
