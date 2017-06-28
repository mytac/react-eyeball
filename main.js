import React, {Component} from 'react';
import {render} from 'react-dom';
import Spy from './spy2'
render(
    <div>
       <Spy outer="outer" inner="inner"></Spy>
    </div>,
    document.querySelector('#root')
)