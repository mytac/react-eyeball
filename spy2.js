import React from 'react';
import Parallax from 'parallax-js'
import PropTypes from 'prop-types';
export default class Spy extends React.Component {
    constructor(props){
        const {color, eyeSize, dopeMove}=obj
        this.color = color || ['#f5f0d8', 'rgb(24, 198, 184)', 'black']
        this.eyeSize = eyeSize || 250
        this.dopeMove = dopeMove || false
        this.init()
    }
    componentDidMount(){
        console.log(document.getElementsByClassName('eyeball'))
    }
    render(){
        return(
            <div className="eyeball">
                ssss
            </div>
        )
    }
}