import { connect } from 'dva'
import { withRouter, Link } from 'dva/router'

const Products = ({ dispatch, _model }) => {
  console.log('about', _model)
  const {tableList} = _model

  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>about {aboutText}</h2>
      <Link to='/'>首页</Link>
    </div>
  );
};

export default connect(({ about: _model }) => ({
  _model,
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
