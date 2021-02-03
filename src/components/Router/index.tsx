import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Main, Product} from "../../pages";
import {NavBar} from "../index";


const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar />
                <Switch>
                    <Route path={"/"} component={Main} exact/>
                    <Route path={"/product"} component={Product}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Router;