import React from 'react';
import Parallax from './static/parallax.js'
// eyeball color
const handleStyle = (size, color) => ({
    width: size + 'px',
    height: size + 'px',
    borderRadius: '50%',
    backgroundColor: color,
    position: 'absolute',
    margin: 'auto',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
})

const Eyeball = (props) => {
    const {color, size, inner} = props
    const sizeGroup = [size, 0.5 * size, 0.32 * size]
    const ratio = [0, size * 0.0045, size * 0.005]
    return (
        <div>
            {color.map((c, index) => <div className={`layer ${inner}-${index}`} key={c} data-depth={ratio[index]}
                                          style={handleStyle(sizeGroup[index], color[index])}></div>
            )}
        </div>
    )
}

export default class Spy extends React.Component {
    constructor(props) {
        super(props)
        const {color, size, dopeMove, outer, inner} = props
        this.color = color || ['#f5f0d8', 'rgb(24, 198 , 184)', 'black']
        this.size = size || 250
        this.dopeMove = dopeMove || false
        this.outer = outer || 'outer'
        this.inner = inner || 'inner'
    }

    componentDidMount() {
        // 绑定Parallax
        const options = {
            relativeInput: false,
            invertX: false,
            invertY: false,
        }

    }

    render() {
        return (
            <Eyeball size={this.size} color={this.color} inner={this.inner}/>
        )
    }
}