const mainStyle = (ele, size, color) => {
    $(ele).css({
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
}

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

class spy {
    constructor(obj) {
        const {color, eyeSize, element, containerEl, dopeMove}=obj
        this.color = color || ['#f5f0d8', 'rgb(24, 198, 184)', 'black']
        this.eyeSize = eyeSize || 250
        this.element = element
        this.containerEl = containerEl
        this.dopeMove = dopeMove || false
        this.init()
    }

    // 绑定事件
    bindParallax() {
        const options = {
            relativeInput: false,
            invertX: false,
            invertY: false,
        }
        // 给container挂上parallax
        const scene1 = $(this.containerEl).get(0)
        const parallax1 = new Parallax(scene1, options)
    }

    //处理样式
    handleStyle() {
        // 最外层样式
        $(this.containerEl).css({
            position: 'absolute',
            margin: 'auto',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        })
        $(this.element).css({position: 'relative'})
        //每一层的样式
        this.eyeSizeGroup.forEach((size, index) => {
            mainStyle(`.${this.classNames[index]}`, size, this.color[index])
        })
    }

    // 根据class生成几个子元素
    generateNewElements() {
        // 设置每层的class名
        const wrapperC = this.element.substring(1)
        this.classNames = [wrapperC + '0', wrapperC + '1', wrapperC + '2']
        const elements = this.classNames.map((c, index) => `<div class='layer ${c} ${index == 0 ? 'layer-border' : ''}'  data-depth=${this.ratio[index]}></div>`)
        $(this.element).append(elements)
    }

    eyeStyleOption() {
        const mainSize = this.eyeSize
        this.eyeSizeGroup = [mainSize, 0.5 * mainSize, 0.32 * mainSize]
        this.ratio = [0, mainSize * 0.0045, mainSize * 0.005]
    }

    moveEvent() {
        $(() => {
            $('body').on('mousemove', () => {
                this.color = randomColor()
                this.classNames.forEach((name, index) => {
                    $(`.${name}`).css({
                        backgroundColor: this.color[index]
                    })
                })
            })
        })
    }

    init() {
        this.eyeStyleOption()
        this.generateNewElements()
        this.bindParallax()
        this.handleStyle()
        if (this.dopeMove) this.moveEvent(this.randomColorFresh)
    }
}