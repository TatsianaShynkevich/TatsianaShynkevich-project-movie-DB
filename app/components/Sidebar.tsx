import * as React from 'react';
import * as DOM from 'react-dom';
import { Link } from "react-router-dom";
import { Observer } from 'mobx-react';
import {menuStore} from '../stores/MenuStore';
import {MenuItem} from './MenuItem';
import {HiddenSidebarState} from './interfaces';

export class Sidebar extends React.Component {
   public render() {
        return (
            <Observer>
                { ()=>
                    <div className="ts-wrapper__sidebar">
                        <div className="ts-sidebar">
                            <div className = "ts-hidden-sidebar__inner">
                                <div className = "ts-sidebar-logos">
                                    <div className = "ts-sidebar-logos_inner">
                                        <img className="ts-sidebar-logo" src="http://localhost:8080/lines-menu.png"  onClick={() => { menuStore.toggleLeftPanel() }}/>
                                    </div>   
                                </div>
                                <ul className = {menuStore.show ? "ts-sidebar-open" : "ts-sidebar-closed"}>
                                    <li className="ts-sidebar-item" >
                                        <Link className="ts-link" to="/movies">Movies</Link>
                                    </li>
                                    <li className="ts-sidebar-item" >
                                        <Link className="ts-link" to="/tv-shows">TV-Shows</Link>
                                    </li>
                                    <li className="ts-sidebar-item" >
                                        <Link className="ts-link" to="/my-library">My library</Link>
                                    </li>
                                    <li className="ts-sidebar-item" >
                                        <Link className="ts-link" to="/support">Support</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            </Observer>
        );
    }
}