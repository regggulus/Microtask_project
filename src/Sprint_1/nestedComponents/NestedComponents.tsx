import {Header} from "./Header";
import {Navbar} from "./Navbar";
import {Footer} from "./Footer";
import React from "react";

export const NestedComponents = () => {
    return(
        <div>
            <Header title={'Site title'}/>
            <Navbar value={4}/>
            <Footer collapsed={false} title={'Menu'}/>
        </div>
    )
}