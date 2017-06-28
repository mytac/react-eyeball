import React, {Component} from 'react';
import {render} from 'react-dom';
import Spy from './spy2'
render(
       <Spy outer="outer" inner="inner"></Spy>,
    document.querySelector('#root')
)