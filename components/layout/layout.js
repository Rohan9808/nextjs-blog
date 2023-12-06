import { Fragment } from "react";
import MainNaviation from "./main-navigation";

export default function Layout(props) {
    return <Fragment>
        <MainNaviation />
        <main>
            {props.children}
        </main>
    </Fragment>
}