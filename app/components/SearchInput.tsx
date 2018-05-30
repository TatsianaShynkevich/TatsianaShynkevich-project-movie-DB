import * as React from 'react';
import * as DOM from 'react-dom';

export class SearchInput extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

    public render() {
        return (
            <div className = "ts-search">
                <button className = "ts-search-button">Search</button>            
                <input className = "ts-search-input" type="text" placeholder="Search..."/>
            </div>
        );
    }
}