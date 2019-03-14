import { connect } from 'dva'
import styles from './index.css'
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd'

const MODEL_NAME = 'login'

class Login extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }

    render() {
        const { location, dispatch, _model } = this.props
        const { getFieldDecorator } = this.props.form
        const { form } = _model
        console.log('_model33', _model)

        let login = () => {
            this.props.form.validateFields((errors) => {
                if (errors) {
                  return
                }
                let values = this.props.form.getFieldsValue()
                console.log('测试啊啊啊0', values)
                dispatch({
                    type: `${MODEL_NAME}/login`,
                    location,
                    payload: values,
                })
            })
        }

        return (
            <div className={styles.wrap}>
                {/* <h2>这是登录页面</h2> */}
                <Form className={styles.form} onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator('account', {
                            initialValue: form.account,
                            rules: [{ required: true, message: '请输入用户名/邮箱' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            initialValue: form.password,
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {/* {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a> */}
                        <Button className={styles.login} type="primary" htmlType="submit" onClick={login}>登录</Button>
                        {/* Or <a href="">register now!</a> */}
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default connect(({ [MODEL_NAME]: _model }) => ({
    _model,
}))(Form.create()(Login))
