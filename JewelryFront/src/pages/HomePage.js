import React from 'react';
import {useWindowSize} from '../App'
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Layout from "../Components/Layout/Layout";
import Hotspot from "../Components/Sidebar/Hotspot/Hotspot";
import Main from "../Components/Main/Main";
import Sidebar from "../Components/Sidebar/Sidebar";
import Logo from "../Components/Sidebar/Logo/Logo";
import Content from "../Components/Content/Content";
import Home from "../Components/Content/Home/Home";
import Popup from "../Components/Popup/Popup";


const HomePage = () => {
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
                        <Home/>
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
                        <Home/>
                    </Content>
                    <Popup/>
                </Main>
                <Footer/>
            </Layout>);
};
export default HomePage;