import React, { Component } from "react";
import {RouteComponentProps} from "react-router";

interface Props  extends RouteComponentProps {}
interface State {}

export default class Role extends Component<Props, State> {
    render() {
        return (
            'Role'
        )
    }
}

