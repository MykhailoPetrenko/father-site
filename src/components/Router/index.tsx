import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Main, Product} from "../../pages";


const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path={"/"} component={Main} exact/>
                    <Route path={"/product"} component={Product}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Router;