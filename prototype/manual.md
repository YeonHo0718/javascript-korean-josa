# Javascript Korean Josa

## 사용법

### Require
```javascript
const JOSA = require(PATH);
```

### Functions
**`String.prototype.yiGa()`**  (이/가) 를 구분합니다.  
**`String.prototype.unNun()`**  (은/는) 을 구분합니다.  
**`String.prototype.ulRul()`**  (을/를) 을 구분합니다.  
**`String.prototype.waGwa()`**  (와/과) 를 구분합니다.  
**`String.prototype.aYa()`**  (아/야) 를 구분합니다.  
**`String.prototype.yi()`**  (이) 를 구분합니다.

### Example
```javascript
const JOSA = require("josa");

function sayHello(name){
    return name.aYa()+" 안녕!";
}
//sayHello("춘식")
//result: 춘식아 안녕!
//sayHello("사과")
//result: 사과야 안녕!

function useItem(itemName){
    return itemName.ulRul()+" 사용했습니다.";
}
//useItem("HP물약")
//result: HP물약을 사용했습니다.
//useItem("언데드의 반지")
//result: 언데드의 반지를 사용했습니다.
```