import React, {Component} from 'react';
import {render} from 'react-dom';
import {Spy} from 'spy2'
render(
    <div>
        <Spy></Spy>
    </div>,
    document.querySelector('#root')
)