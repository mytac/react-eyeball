# spy
make an eyeball and its perspective will be changed through mousemoving
## How to use
### options
```javascript
// these options is required
const obj={
        // 250 is the maxium size
        // please do not set bigger value,it will case some mistakes about its style.
        eyeSize:250, 
        element:'#test-inner', // class name or id of the wrapper element
        containerEl:'#test', // class name or id of container element
    }
```

```javascript
// these options is selected
color:Array(3) //  e.g. ['#f5f0d8', 'rgb(24, 198, 184)', 'black']
dopeMove:boolean
```
## example
![basic](https://github.com/mytac/spy/blob/develop/static/img/basic.gif)
