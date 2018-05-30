import * as React from 'react';
import * as DOM from 'react-dom';
import {Menu} from './Menu';
import { SearchInput } from './SearchInput';

export class Header extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

    public render() {
        return (
            <div className = "ts-header">
                <SearchInput />
                <Menu />
            </div>
        );
    }
}