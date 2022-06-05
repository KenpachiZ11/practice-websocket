import { PageHeader } from "antd"
import { NavLink } from "react-router-dom"
import styles from './Header.module.css'
import {SmileOutlined} from '@ant-design/icons'
import { Space } from 'antd'

const Header = () => {
    return (
        <Space>
            <PageHeader
                className={styles.wrapper}
                title={<NavLink to='/'><SmileOutlined/></NavLink>}
            >
                <header className={styles.wrapper_header}>
                    <div className={styles.wrapper_header__link}>
                        <NavLink to='/'>Owner</NavLink>
                        <NavLink to='/aboute'>About</NavLink>
                    </div>
                </header>
            </PageHeader>
        </Space>
    )
}

export {Header}