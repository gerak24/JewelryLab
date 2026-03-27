import React from 'react';
import Layout from '../Components/Layout/Layout';
import Main from '../Components/Main/Main';
import ManagerHeader from '../Components/Header/ManagerHeader';
import Sidebar from '../Components/Sidebar/Sidebar';
import Content from '../Components/Content/Content';
import NomenclatureForm from '../Components/Sidebar/NomenclatureForm/NomenclatureForm';
import Nomenclature from '../Components/Content/Catalog/Nomenclature';

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
        </Layout>
    );
};

export default NomencPage;