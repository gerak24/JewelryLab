import React from 'react';
import Layout from "../Components/Layout/Layout";
import Main from "../Components/Main/Main";
import ManagerFooter from "../Components/Footer/ManagerFooter";
import ManagerHeader from "../Components/Header/ManagerHeader";
import Sidebar from "../Components/Sidebar/Sidebar";
import Content from "../Components/Content/Content";
import Cart from "../Components/Content/Cart/Cart";
import NomenclatureForm from "../Components/Sidebar/NomenclatureForm/NomenclatureForm";
import Nomenclature from "../Components/Content/Catalog/Nomenclature";

const NomencPage = () => {
    return (
        <Layout>
            <ManagerHeader/>
            <Main>
                <Sidebar>
                    <NomenclatureForm/>
                </Sidebar>
                <Content>
                    <Nomenclature/>
                </Content>
            </Main>
            <ManagerFooter/>
        </Layout>
    );
};

export default NomencPage;