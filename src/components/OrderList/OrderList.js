import OrderListItem from '../OrderListItem/OrderListItem';
import styles from './OrderList.module.css';

export default function OrderList({ orders, activeOrder, handleSelectOrder }) {
const orderItems = orders.map(o =>
  <OrderListItem
    order={o}
    isSelected={o === activeOrder}
    handleSelectOrder={handleSelectOrder}
    key={o._id}
  />
);

return (
  <main className={styles.OrderList}>
    {/* if the map returning a length, will display a list of our items returning the mapped orders above*/}
    {orderItems.length ?
      orderItems
      :
      // if there is no length 
      <span className={styles.noOrders}>No Previous Orders</span>
    }
  </main>
);
}