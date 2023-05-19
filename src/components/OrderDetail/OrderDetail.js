import styles from "./OrderDetail.module.css";
import LineItem from "../LineItem/LineItem";

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({
  order,
  handleChangeQty,
  handleCheckout,
}) {
  if (!order) return null;

  const lineItems = order.lineItems.map((item) => (
    <LineItem
      lineItem={item}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />
  ));

  return (
    // the right side of the page
    <div className={styles.OrderDetail}>
      <div className={styles.sectionHeading}>
        {order.isPaid ? (
          <span>
            ORDER <span className="smaller">{order.orderId}</span>
          </span>
        ) : (
          <span>NEW ORDER</span>
        )}

        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>

      <div
        className={`${styles.lineItemContainer} flex-ctr-ctr flex-col scroll-y`}
      >
        {/* this is the line item that was mapped above */}
        {/* if the line items length has elements/OR >=0 */}
        {lineItems.length ? (
          <>
            {lineItems}
            <section className={styles.total}>
                {/* to show the "Total" if the order is already paid */}
                {/* otherwise it shows the "Checkout" btn */}
                {/* we can have the word "Total" in both scenarios by adding it changing the css style */}
              {order.isPaid ? (
                <span className={styles.right}>TOTAL&nbsp;&nbsp;</span>
              ) : (
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >
                  CHECKOUT
                </button>
              )}
              <span>{order.totalQty}</span>
              <span className={styles.right}>
                ${order.orderTotal.toFixed(2)}
              </span>
            </section>
          </>
        ) : (
            // if the line items does not have a length/items
          <div className={styles.hungry}>Hungry?</div>
        )}
      </div>
    </div>
  );
}
