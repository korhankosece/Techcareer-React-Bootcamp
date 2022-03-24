import 'antd/dist/antd.css';
import { Routes, Route, Link } from 'react-router-dom'
import AboutPage from './routingSample/AboutPage';
import HomePage from './routingSample/HomePage';
import { Layout, Menu } from 'antd';
import SupplierPage from './routingSample/SupplierPage';
import NotFoundPage from './routingSample/NotFoundPage';
import SupplierDetailPage from './routingSample/SupplierDetailPage';
import SupplierAddPage from './routingSample/SupplierAddPage';
import { CartProvider } from './contexts/CartContext';

function App() {
    const { Header, Content, Footer } = Layout;
    return (
        <CartProvider>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1"><Link to={'/'}>Home</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/about'>About</Link></Menu.Item>
                        <Menu.Item key="3"><Link to='/suppliers'>Suppliers</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path='/suppliers' element={<SupplierPage />} />
                            <Route path='/suppliers/:id' element={<SupplierDetailPage />} />
                            <Route path='/suppliers/add' element={<SupplierAddPage />} />
                            <Route path='*' element={<NotFoundPage />} />
                        </Routes>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </CartProvider>
    );
}

export default App;

//index.js => App.js => Text.js => p

// BrowserRoute Routes ve Route elementleri eklenecek, iki route açılacak ilki liste ikincisi detay sayfası
// listede her satırda bir tane buton olacak ve idden detaya gidecek
// detayda 2 tane prop yazdırılacak