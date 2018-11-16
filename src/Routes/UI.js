import React from 'react';
import MainLayout from "../Components/MainLayout.js";
import {UIConsumer, UIProvider} from "../Providers/UIProvider.js";
export default function Home() {
    return(
        <UIProvider>
            <UIConsumer>
                {
                    value => (
                        <MainLayout activeMenu = {value.state.activeMenu}/>
                    )
                }
            </UIConsumer>
        </UIProvider>
    );
}