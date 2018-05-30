import * as React from 'react';
import * as DOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Menu extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

    public render() {

        return (
            <ul className = "ts-menu-header">
                <li className="ts-menu-item" >
					<Link className="ts-header-link" to="/add-movie">Add movie</Link>
				</li>
				<li className="ts-menu-item" >
                    <Link className="ts-header-link" to="/about">About</Link>
                </li>
                <li className="ts-menu-item" >
					<Link className="ts-header-link" to="/pricing">Pricing</Link>
				</li>
				<li className="ts-menu-item" >
                    <Link className="ts-header-link" to="/blog">Blog</Link>
                </li>
                <li className="ts-menu-item" >
					<Link className="ts-header-link" to="/login">Login</Link>
				</li>
            </ul>
        );
    }
}