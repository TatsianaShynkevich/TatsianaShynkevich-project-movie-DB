import * as React from 'react';
import * as DOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {MenuItem} from './MenuItem';
import {HiddenSidebarState} from './interfaces';

export class HiddenSidebar extends React.Component<any, HiddenSidebarState> {
    constructor(props: any){
        super(props);
        this.state = { 
            isOpened: false,
         };
    }

    toggleState(): void {
        this.setState({isOpened: !this.state.isOpened});
    }

    getClassName(): string {
        let sidebarSelector = "";
        if (this.state.isOpened) {
            sidebarSelector = "ts-menu-sidebar";
        } else {
                sidebarSelector = "ts-wrapper__sidebar_visible";
        }
        return sidebarSelector;
    }

   public render() {
        let hiddenElements;
        if (this.state.isOpened) {
            hiddenElements = 
            <ul className = {this.getClassName()}>
                <li className="ts-sidebar-item" >
					<Link className="ts-header-link" to="/movies">Movies</Link>
				</li>
				<li className="ts-sidebar-item" >
                    <Link className="ts-header-link" to="/tv-shows">TV-Shows</Link>
                </li>
                <li className="ts-sidebar-item" >
					<Link className="ts-header-link" to="/my-library">My library</Link>
				</li>
				<li className="ts-sidebar-item" >
                    <Link className="ts-header-link" to="/support">Support</Link>
                </li>
            </ul>
        }
        return (
            <div className = "ts-hidden-sidebar__inner">
                <div className = "ts-sidebar-logos" onClick={this.toggleState.bind(this)}>
                    Press
                </div>
                {hiddenElements}
            </div>
        );
    }

    /*public render() {
        return (
            <div>
                <div onClick={this.toggleState.bind(this)}>
                    Press
                </div>
                <ul className = {this.getClassName()}>
                    <MenuItem  menuName='Movies' />
                    <MenuItem  menuName='TV-Shows' />
                    <MenuItem  menuName='My library' />
                    <MenuItem  menuName='Support' />
                </ul>
            </div>
        );
    }  */
}