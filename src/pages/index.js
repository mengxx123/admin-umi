import { connect } from 'dva'
import ProductList from '../components/ProductList'
import { withRouter, Link } from 'dva/router'
import { Layout, Menu, Breadcrumb } from 'antd'

const {
  Header, Footer, Sider, Content,
} = Layout

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
          <Link to='/'>首页</Link>
          <Link to='/login'>登录</Link>
          <ProductList onDelete={handleDelete} products={products} />
      
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(Products)

// import { Table, Popconfirm, Button, Icon } from 'antd'
// import styles from './index.css';

// export default function() {
  
//   return (
//     <div className={styles.normal}>
//       <div className={styles.welcome} />
//       <ul className={styles.list}>
//         <Icon type="home" />
//         <Button type="primary">Primary</Button>
//         <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
//         <li><a href="https://umijs.org/guide/getting-started.html">Getting Started</a></li>
//       </ul>
//     </div>
//   );
// }
