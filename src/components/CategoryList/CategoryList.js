import styles from './CategoryList.module.css';

export default function CategoryList({ categories, activeCat, setActiveCat }) {
  const cats = categories.map(cat =>
    <li
    //displaying the name of the cat
      key={cat}
      //if active cat, put styles on to highlight. if not  leave unstyled
      className={cat === activeCat ? styles.active : ''}
      // FYI, the below will also work, but will give a warning
      // className={cat === activeCat && 'active'}
      // on clicking will set the active cat on the cart
      onClick={() => setActiveCat(cat)}
    >
      {cat}
    </li>
  );
  return (
    <ul className={styles.CategoryList}>
      {cats}
    </ul>
  );
}