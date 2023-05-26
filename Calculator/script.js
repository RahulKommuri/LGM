var o = document.getElementById('output');
function append(c) {
    if (o.value.slice(-1) != 'r' && o.value.slice(-1) != 'y' && o.value.slice(-1) != 'N') {
        o.value += c;
    }
    else {
        o.value = ''
        o.value += c;
    }
}
function calculate() {
    let v = o.value;
    for (var i = 0; i < v.length; i++) {
        if (v.slice(i, i + 1) == '÷')
            v = v.slice(0, i) + '/' + v.slice(i + 1);
        if (v.slice(i, i + 1) == '×')
            v = v.slice(0, i) + '*' + v.slice(i + 1);
    }
    try {
        o.value = eval(v);
    }
    catch (error) {
        o.value = 'Error';
    }
}
function allclear() {
    o.value = '';
}
function del() {
    o.value = o.value.slice(0, -1);
}