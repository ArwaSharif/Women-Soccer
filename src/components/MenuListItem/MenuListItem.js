import styles from './MenuListItem.module.css';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className={styles.MenuListItem}>
      {/* styles.emoji coming from the css sendFile */}
      {/* then pulling the class name flex-center-center from the index.css */}
      {/* then the last thing is the emoji itself */}
      <div className={styles.emoji + ' ' + 'flex-ctr-ctr'}>{menuItem.emoji}</div>
      <div className={styles.name}>{menuItem.name}</div>
      <div className={styles.buy}>
        <span>${menuItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}