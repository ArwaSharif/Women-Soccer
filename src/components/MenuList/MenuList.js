import styles from './MenuList.module.css';
import MenuListItem from '../MenuListItem/MenuListItem';


//from the new order page
export default function MenuList({ menuItems, handleAddToOrder }) {
  // filtered by cat
  const items = menuItems.map(item =>
    <MenuListItem
      key={item._id}
      // to add to the new orders
      handleAddToOrder={handleAddToOrder}
      menuItem={item}
    />
  );
  return (
    <main className={styles.MenuList}>
      {items}
    </main>
  );
}