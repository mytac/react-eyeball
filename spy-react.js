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

const randomColor = () => {
    let i = 0, colorNum = [], res = []
    for (i; i < 3; i++) {
        let j = 0;
        for (j; j < 3; j++) {
            colorNum.push(Math.round((Math.random() * 255)))
        }
        res.push(`rgb(${colorNum.join(',')})`)
        colorNum = []
    }
    return res
}

const Eyeball = (props) => {
    const {color, size, inner} = props
    const sizeGroup = [size, 0.5 * size, 0.32 * size]
    const ratio = [0, size * 0.0045, size * 0.005]
    const wrapperStyle={
        position: 'relative',
        margin: 'auto',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
    return (
        <div className={inner} style={wrapperStyle}>
            {color.map((c, index) => <div className={`layer ${inner}-${index}`} key={c}
                                          data-depth={ratio[index]}
                                          style={handleStyle(sizeGroup[index], color[index])}></div>
            )}
        </div>
    )
}

export default class Spy extends React.Component {
    constructor(props) {
        super(props)
        const {color, size, dopeMove, outer, inner,position} = props
        this.color = color || ['#f5f0d8', 'rgb(24, 198 , 184)', 'black']
        this.size = size || 250
        this.dopeMove = dopeMove || false
        this.outer = outer || 'outer'
        this.inner = inner || 'inner'
        this.position=position||{margin:'200px auto'}

        this.state={
            color:this.color
        }
    }

    changeRandomColor(){
        document.body.addEventListener('mousemove',()=>{
            this.setState({
                color:randomColor()
            })
        })
    }

    componentDidMount() {
        // 绑定Parallax
        const options = {
            relativeInput: false,
            invertX: false,
            invertY: false,
            pointerEvents:true
        }
        const scene=document.getElementById(this.outer)
        new Parallax(scene, options)

        // 绑定changeRandomColor事件
        this.dopeMove&&this.changeRandomColor()
    }

    render() {
        const outerStyle=Object.assign(
            {
                width:this.size+'px',
                height:this.size+'px',
                float:'left'
            },
            this.position
        )
        return (
            <div>
                <div id={this.outer} style={outerStyle}>
                    <Eyeball size={this.size} color={this.state.color} inner={this.inner}/>
                </div>
            </div>

        )
    }
}