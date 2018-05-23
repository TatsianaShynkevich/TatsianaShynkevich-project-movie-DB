import * as React from 'react';
import * as DOM from 'react-dom';
import Menu from './Menu';

export default class Header extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

    public render() {
        return (
            <div>
                <Menu />
            </div>
        );
    }
}
