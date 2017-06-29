# spy
make an eyeball and its perspective will be changed through mousemoving
## How to use
### install
```
npm install spy-eye --save
```
and import this package
```
import Spy from '../lib/spy-react'
```
please checkout the [example](https://github.com/mytac/spy/blob/react/example/main.js)
### options
```javascript
// these options is required
outer:[string] wrapper element name,if you need over 1 eyeball,please named them in different string.
inner:[string] inner wrapper element name.
```

```javascript
// these options is selected
size:[number] default 250,and 250 is the maxium value.
color:[Array(3)] default ['#f5f0d8', 'rgb(24, 198, 184)', 'black']
dopeMove:[boolean] default false
```
## example
![basic](https://github.com/mytac/spy/blob/develop/static/img/basic.gif)

### dopeMove:true
![dopeMove](https://github.com/mytac/spy/blob/develop/static/img/dopMove.gif?raw=true)
