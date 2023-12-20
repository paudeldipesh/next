import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.css";

export default function ProductCard() {
  return (
    <div className={styles.cardContainer}>
      <AddToCart />
    </div>
  );
}
