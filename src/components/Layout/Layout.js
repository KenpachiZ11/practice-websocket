import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'


const Layout = () => {
    return (
        <>
            <header><Header/></header>
            <main><Outlet/></main>
            <footer></footer>
        </>
    )
}

export {Layout}