import React from 'react';
import Layout from "../Components/Layout/Layout";
import Main from "../Components/Main/Main";
import ManagerFooter from "../Components/Footer/ManagerFooter";
import ManagerHeader from "../Components/Header/ManagerHeader";
import OrdersTable from "../Components/Content/Orders/OrdersTable";

const OrdersPage = () => {
    return (
        <Layout>
            <ManagerHeader/>
            <Main>
              <OrdersTable/>
            </Main>
            <ManagerFooter/>
        </Layout>
    );
};

export default OrdersPage;