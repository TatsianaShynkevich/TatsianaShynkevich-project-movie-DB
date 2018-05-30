import * as React from 'react';
import * as ReactDOM from "react-dom";
import {MenuItemProps} from './interfaces';

export class MenuItem extends React.Component<MenuItemProps, any> {
    constructor(props: MenuItemProps){
        super(props);

       this.props = {
            menuName: this.props.menuName,
            //menuItemSelector: this.props.menuItemSelector
        }
    }

    public render() {
        return (
            <li className = "ts-menu-item" >
                <a href="#" className = "ts-link">{ this.props.menuName }</a>
            </li>
        );
    }
}