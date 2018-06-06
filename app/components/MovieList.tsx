import * as React from 'react';
import * as DOM from 'react-dom';
import { Observer } from 'mobx-react';
import {movieListStore} from '../stores/MovieListStore';


export class MovieList extends React.Component {
    public render() {
         return (
             <Observer>
                 { ()=>
                     <div className="ts-wrapper__sidebar">

                     </div>
                 }
             </Observer>
         );
     }
 }