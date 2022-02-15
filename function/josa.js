function yiGa(string){  // (이/가) 구분
    const str = string.slice(-1);
    const splitted = str.normalize('NFD');
    if(splitted.length==3){ //받침이 있다
        return string+'이';
    }else if(splitted.length==2){ //받침이 없다
        return string+'가';
    }else{ //외국어 또는 제대로된 음절이 아닌 경우, 등등(apple,ㅏ,ㅑ,ㄱ,ㄴ)
        return string+' 이(가)';
    }
}

function unNun(string){  // (은/는) 구분
    const str = string.slice(-1);
    const splitted = str.normalize('NFD');
    if(splitted.length==3){ //받침이 있다
        return string+'은';
    }else if(splitted.length==2){ //받침이 없다
        return string+'는';
    }else{ //외국어 또는 제대로된 음절이 아닌 경우, 등등(apple,ㅏ,ㅑ,ㄱ,ㄴ)
        return string+' 은(는)';
    }
}

function ulRul(string){  // (을/를) 구분
    const str = string.slice(-1);
    const splitted = str.normalize('NFD');
    if(splitted.length==3){ //받침이 있다
        return string+'을';
    }else if(splitted.length==2){ //받침이 없다
        return string+'를';
    }else{ //외국어 또는 제대로된 음절이 아닌 경우, 등등(apple,ㅏ,ㅑ,ㄱ,ㄴ)
        return string+' 을(를)';
    }
}


function waGwa(string){  // (와/과) 구분
    const str = string.slice(-1);
    const splitted = str.normalize('NFD');
    if(splitted.length==3){ //받침이 있다
        return string+'과';
    }else if(splitted.length==2){ //받침이 없다
        return string+'와';
    }else{ //외국어 또는 제대로된 음절이 아닌 경우, 등등(apple,ㅏ,ㅑ,ㄱ,ㄴ)
        return string+' 와(과)';
    }
}


function aYa(string){  // (아/야) 구분
    const str = string.slice(-1);
    const splitted = str.normalize('NFD');
    if(splitted.length==3){ //받침이 있다
        return string+'아';
    }else if(splitted.length==2){ //받침이 없다
        return string+'야';
    }else{ //외국어 또는 제대로된 음절이 아닌 경우, 등등(apple,ㅏ,ㅑ,ㄱ,ㄴ)
        return string+'';
    }
}

function yi(string){  // (이/X) 구분 [ ~(이)며. ~(이)라도, ~(이)라서, 등등 ] 에 쓰임
    const str = string.slice(-1);
    const splitted = str.normalize('NFD');
    if(splitted.length==3){ //받침이 있다
        return string+'이';
    }else if(splitted.length==2){ //받침이 없다
        return string+'';
    }else{ //외국어 또는 제대로된 음절이 아닌 경우, 등등(apple,ㅏ,ㅑ,ㄱ,ㄴ)
        return string+' (이)';
    }
}

module.exports = {
    yiGa: yiGa,
    unNun: unNun,
    ulRul: ulRul,
    waGwa: waGwa,
    aYa: aYa,
    yi: yi
}