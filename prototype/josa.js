String.prototype.yiGa = function(){  // (이/가) 구분
    const str = this.slice(-1);
    const splitted = str.normalize('NFD');
    if(splitted.length==3){ //받침이 있다
        return this+'이';
    }else if(splitted.length==2){ //받침이 없다
        return this+'가';
    }else{ //외국어 또는 제대로된 음절이 아닌 경우, 등등(apple,ㅏ,ㅑ,ㄱ,ㄴ)
        return this+' 이(가)';
    }
}

String.prototype.unNun = function(){  // (은/는) 구분
    const str = this.slice(-1);
    const splitted = str.normalize('NFD');
    if(splitted.length==3){ //받침이 있다
        return this+'은';
    }else if(splitted.length==2){ //받침이 없다
        return this+'는';
    }else{ //외국어 또는 제대로된 음절이 아닌 경우, 등등(apple,ㅏ,ㅑ,ㄱ,ㄴ)
        return this+' 은(는)';
    }
}

String.prototype.ulRul = function(){  // (을/를) 구분
    const str = this.slice(-1);
    const splitted = str.normalize('NFD');
    if(splitted.length==3){ //받침이 있다
        return this+'을';
    }else if(splitted.length==2){ //받침이 없다
        return this+'를';
    }else{ //외국어 또는 제대로된 음절이 아닌 경우, 등등(apple,ㅏ,ㅑ,ㄱ,ㄴ)
        return this+' 을(를)';
    }
}


String.prototype.waGwa = function(){  // (와/과) 구분
    const str = this.slice(-1);
    const splitted = str.normalize('NFD');
    if(splitted.length==3){ //받침이 있다
        return this+'과';
    }else if(splitted.length==2){ //받침이 없다
        return this+'와';
    }else{ //외국어 또는 제대로된 음절이 아닌 경우, 등등(apple,ㅏ,ㅑ,ㄱ,ㄴ)
        return this+' 와(과)';
    }
}


String.prototype.aYa = function(){  // (아/야) 구분
    const str = this.slice(-1);
    const splitted = str.normalize('NFD');
    if(splitted.length==3){ //받침이 있다
        return this+'아';
    }else if(splitted.length==2){ //받침이 없다
        return this+'야';
    }else{ //외국어 또는 제대로된 음절이 아닌 경우, 등등(apple,ㅏ,ㅑ,ㄱ,ㄴ)
        return this+'';
    }
}

String.prototype.yi = function(){  // (이/X) 구분 [ ~(이)며. ~(이)라도, ~(이)라서, 등등 ] 에 쓰임
    const str = this.slice(-1);
    const splitted = str.normalize('NFD');
    if(splitted.length==3){ //받침이 있다
        return this+'이';
    }else if(splitted.length==2){ //받침이 없다
        return this+'';
    }else{ //외국어 또는 제대로된 음절이 아닌 경우, 등등(apple,ㅏ,ㅑ,ㄱ,ㄴ)
        return this+' (이)';
    }
}