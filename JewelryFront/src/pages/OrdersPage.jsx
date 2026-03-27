import React from 'react';
import Layout from '../Components/Layout/Layout';
import Main from '../Components/Main/Main';
import ManagerHeader from '../Components/Header/ManagerHeader';
import OrdersTable from '../Components/Content/Orders/OrdersTable';

const OrdersPage = () => {
    return (
        <Layout>
            <ManagerHeader/>
            <Main>
              <OrdersTable/>
            </Main>
        </Layout>
    );
};

export default OrdersPage;