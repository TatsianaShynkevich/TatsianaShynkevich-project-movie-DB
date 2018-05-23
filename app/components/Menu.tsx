import * as React from 'react';
import * as DOM from 'react-dom';
import MenuItem from './MenuItem';

const root = document.getElementById('app');

export default class Menu extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

    public render() {
        return (
            <div className = "ts-menu">
                <MenuItem  menuName='Add movie' />
                <MenuItem  menuName='About' />
                <MenuItem  menuName='Pricing' />
                <MenuItem  menuName='Blog' />
            </div>
        );
    }
}