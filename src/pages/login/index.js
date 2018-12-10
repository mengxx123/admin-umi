import { connect } from 'dva'
import styles from './index.css'

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div className={styles.wrap}>
      <h2>这是登录页面</h2>
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(Products)
