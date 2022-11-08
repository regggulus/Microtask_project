import React from "react";
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";

export function Site() {
    return (
        <div>
            <Header titleHead={"New Head"}/>
            <Body titleBod={"New Body"}/>
            <Footer titleFoot={"New Footer"}/>
        </div>
    )
}