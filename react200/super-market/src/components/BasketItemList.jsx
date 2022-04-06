import React from 'react';
import BasketItem from './BasketItem';
import { useObserver } from 'mobx-react';
import useStore from '../useStore';

const BasketItemList = () => {
  const { market } = useStore();

  const onTake = (name) => {
    market.take(name);
  };

  return useObserver(() => {
    const itemList = market.selectedItems.map((item) => (
      <BasketItem
        item={item}
        key={item.name}
        onTake={onTake}
      />
    ));
    return (
      <div>
        {itemList}
      </div>
    );
  });
};
export default BasketItemList;