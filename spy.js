const mainStyle=(ele,size,color)=>{
    $(ele).css({
        width: size+'px',
        height:size+'px',
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
const randomColor=()=>{
    let i=0,colorNum=[]
    for(i;i<3;i++){
        colorNum.push(`${Math.round(Math.random()*255)}`)
    }
    return `rgb(${colorNum.join(',')})`
}
class spy {
    constructor(obj) {
        const {color,eyeSize,element,containerEl}=obj
        this.color = color||[randomColor(),randomColor(),randomColor()]
        this.eyeSize=eyeSize||250
        this.element=element
        this.containerEl=containerEl

        this.init()
    }
    // 绑定事件
    bindEvent(){
        const options={
            relativeInput:false,
            invertX:false,
            invertY:false,
        }
        // 给container挂上parallax
        const scene1 = $(this.containerEl).get(0)
        const parallax1 = new Parallax(scene1,options)
    }
    //处理样式
    handleStyle(){
        // 最外层样式
        $(this.containerEl).css({
            position:'absolute',
            margin: 'auto',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        })
        $(this.element).css({position:'relative'})
        //每一层的样式
        this.eyeSizeGroup.forEach((size,index)=>{
            mainStyle(`.${this.classNames[index]}`,size,this.color[index])
        })
    }
    // 根据class生成几个子元素
    generateNewElements(){
        // 设置每层的class名
        const wrapperC=this.element.substring(1)
        this.classNames=[wrapperC+'0',wrapperC+'1',wrapperC+'2']
        const elements=this.classNames.map((c,index)=>`<div class='layer ${c}'  data-depth=${this.ratio[index]}></div>`)
        $(this.element).append(elements)
    }

    eyeStyleOption(){
        const mainSize=this.eyeSize
        this.eyeSizeGroup=[mainSize,0.4*mainSize,0.15*mainSize]
        this.ratio=[0,mainSize*0.01,mainSize*0.012]
    }

    init(){
        this.eyeStyleOption()
        this.generateNewElements()
        this.bindEvent()
        this.handleStyle()
    }
}