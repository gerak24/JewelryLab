import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Layout from "../Components/Layout/Layout";
import Main from "../Components/Main/Main";
import Content from "../Components/Content/Content";
import Catalog from "../Components/Content/Catalog/Catalog";
import Popup from "../Components/Popup/Popup";

const CatalogPage = () => {
    return (
        <Layout>
            <Header/>
            <Main>
                <Content>
                    <Catalog/>
                </Content>
                <Popup/>
            </Main>
            <Footer/>
        </Layout>
    );
};

export default CatalogPage;