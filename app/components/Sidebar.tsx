import * as React from 'react';
import * as DOM from 'react-dom';
import {HiddenSidebar} from './HiddenSidebar';

export class Sidebar extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

    public render() {
        return (
            <div className="ts-wrapper__sidebar">
                <div className="ts-sidebar">
                    <HiddenSidebar />
                </div>
            </div>
        );
    }
}