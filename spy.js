class spy {
    constructor(obj) {
        const {color,eyeSize,element,containerEl}=obj
        this.color = color
        this.eyeSize=250
        this.element=element
        this.containerEl=containerEl

        this.init()
    }
    bindEvent(){

    }
    render(){

    }
    mainStyle(ele,size,color){
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
    // 根据class生成几个子元素
    generateNewElements(){
        const options={
            relativeInput:false,
            invertX:false,
            invertY:false,
        }
        // 设置每层的class名
        const wrapperC=this.element.substring(1)
        const classNames=[wrapperC+'0',wrapperC+'1',wrapperC+'2']
        const elements=classNames.map((c,index)=>`<div class='layer ${c}'  data-depth=${this.ratio[index]}></div>`)
        $(this.element).append(elements)
        // 给container挂上parallax
        const scene1 = $(this.containerEl).get(0)
        const parallax1 = new Parallax(scene1,options)
        // 最外层样式
        $(this.containerEl).css({position:'absolute'})
        $(this.element).css({position:'relative'})
        //每一层的样式
        this.eyeSizeGroup.forEach((size,index)=>{
            this.mainStyle(`.${classNames[index]}`,size,this.color[index])
        })
        console.log('classNames',classNames)
    }

    eyeStyle(){
        const mainSize=this.eyeSize
        this.eyeSizeGroup=[mainSize,0.4*mainSize,0.15*mainSize]
        this.ratio=[0,2.5,3]
    }

    init(){
        this.eyeStyle()
        this.generateNewElements()
    }
}