function funx(){}
function receivesAFunction(funx){
    funx()
}

oy = () => {}
function returnsANamedFunction(){
    return oy
}

function returnsAnAnonymousFunction(){
    return () => {}
}