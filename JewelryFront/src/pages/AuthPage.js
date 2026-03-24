import React from 'react';
import Layout from "../Components/Layout/Layout";
import AuthForm from "../Components/Content/AuthForm/AuthForm";
import AuthMain from "../Components/Main/AuthMain";

const AuthPage = () => {
    return (
        <Layout>
            <AuthMain>
                <AuthForm/>
            </AuthMain>
        </Layout>
    );
};

export default AuthPage;