import React, {Component} from 'react';
import {render} from 'react-dom';
import Spy from '../lib/spy-react'
const pos1={
    margin:'100px  0 0 520px'
}
const pos2={
    margin:'10px auto'
}
render(
       <div>
           <Spy outer="outer" inner="inner" position={pos1}></Spy>
           <Spy outer="outer1" inner="inner" size="100" position={pos1} dopeMove={true}></Spy>
           <Spy outer="outer2" inner="inner" size="125" position={pos1}></Spy>
       </div>,
    document.querySelector('#root')
)