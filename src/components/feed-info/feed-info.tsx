import { FC, useMemo } from 'react';
import { TOrder } from '@utils-types';
import { FeedInfoUI } from '../ui/feed-info';
<<<<<<< HEAD
import { useSelector } from '@store';
import {
  selectFeed,
  selectFeedOrders
} from '../../services/orders/orders-slice';
=======
import { useSelector } from '../../services/store';
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a

const getOrders = (orders: TOrder[], status: string): number[] =>
  orders
    .filter((item) => item.status === status)
    .map((item) => item.number)
    .slice(0, 20);

export const FeedInfo: FC = () => {
<<<<<<< HEAD
  /** TODO: взять переменные из стора */
  const orders: TOrder[] = useSelector(selectFeedOrders);
  const feed = useSelector(selectFeed);
=======
  const { orders, total, totalToday } = useSelector((state) => ({
    orders: state.feeds.orders,
    total: state.feeds.total,
    totalToday: state.feeds.totalToday
  }));
  const feed = useMemo(() => ({ total, totalToday }), [total, totalToday]);
>>>>>>> 938b4d3323a03e095b1fb5951ec7a7434af8824a

  const readyOrders = useMemo(() => getOrders(orders, 'done'), [orders]);
  const pendingOrders = useMemo(() => getOrders(orders, 'pending'), [orders]);

  return (
    <FeedInfoUI
      readyOrders={readyOrders}
      pendingOrders={pendingOrders}
      feed={feed}
    />
  );
};
