import * as React from 'react';
import * as DOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Header} from './components/Header';
import { Sidebar } from './components/Sidebar';


export class App extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

    public render() {
        return (
            <Router>
                <div className = "ts-wrapper">
                    <div className="ts-wrapper-inner">
                        <Sidebar />
                        <Header />                    
                    </div>
                </div>
            </Router>
        );
    }
} 