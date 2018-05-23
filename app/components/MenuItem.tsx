import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class MenuItem extends React.Component<any, any> {
    constructor(props: any){
        super(props);

       this.props = {
            menuName: this.props.menuName
        }
    }

    public render() {
        return (
            <li className = "ts-menu-item" >
                <a href="#">{ this.props.menuName }</a>
            </li>
        );
    }
}