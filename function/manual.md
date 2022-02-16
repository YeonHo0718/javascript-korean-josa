# Javascript Korean Josa

## 사용법

### Require
```javascript
const JOSA = require(PATH);
```

### Functions
**`yiGa(string: String)`**  (이/가) 를 구분합니다.  
**`unNun(string: String)`**  (은/는) 을 구분합니다.  
**`ulRul(string: String)`**  (을/를) 을 구분합니다.  
**`waGwa(string: String)`**  (와/과) 를 구분합니다.  
**`aYa(string: String)`**  (아/야) 를 구분합니다.  
**`yi(string: String)`**  (이) 를 구분합니다.

### Example
```javascript
function sayHello(name){
    return aYa(name)+" 안녕!";
}
//sayHello("춘식")
//result: 춘식아 안녕!
//sayHello("사과")
//result: 사과야 안녕!

function useItem(itemName){
    return ulRul(itemName)+" 사용했습니다.";
}
//useItem("HP물약")
//result: HP물약을 사용했습니다.
//useItem("언데드의 반지")
//result: 언데드의 반지를 사용했습니다.
```