import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Layout from "../Components/Layout/Layout";
import Sidebar from "../Components/Sidebar/Sidebar";
import Logo from "../Components/Sidebar/Logo/Logo";
import Content from "../Components/Content/Content";
import Main from "../Components/Main/Main";
import CartInfo from "../Components/Sidebar/CartInfo/CartInfo";
import Cart from "../Components/Content/Cart/Cart";

const CatalogPage = () => {
    return (
        <Layout>
            <Header/>
            <Main>
                <Sidebar>
                    <Logo/>
                    <CartInfo/>
                </Sidebar>
                <Content>
                    <Cart/>
                </Content>
            </Main>
            <Footer/>
        </Layout>
);
};

export default CatalogPage;