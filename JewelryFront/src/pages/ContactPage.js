import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Layout from "../Components/Layout/Layout";
import Sidebar from "../Components/Sidebar/Sidebar";
import Hotspot from "../Components/Sidebar/Hotspot/Hotspot";
import Logo from "../Components/Sidebar/Logo/Logo";
import Main from "../Components/Main/Main";
import Content from "../Components/Content/Content";
import Contacts from "../Components/Content/Contacts/Contacts";
import {useWindowSize} from "../App";
import Popup from "../Components/Popup/Popup";


const ContactPage = () => {
    const [width] = useWindowSize();
    if (width > 640) {
        return (
            <Layout>
                <Header/>
                <Main>
                    <Sidebar>
                        <Logo/>
                        <Hotspot/>
                    </Sidebar>
                    <Content>
                        <Contacts/>
                    </Content>
                    <Popup/>
                </Main>
                <Footer/>
            </Layout>
        );
    } else
        return (
            <Layout>
                <Header/>
                <Main>
                    <Content>
                        <Sidebar>
                            <Hotspot/>
                        </Sidebar>
                        <Contacts/>
                    </Content>
                    <Popup/>
                </Main>
                <Footer/>
            </Layout>);
};

export default ContactPage;