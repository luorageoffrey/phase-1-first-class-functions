
function receivesAFunction(cb){
    cb()
}

function returnsANamedFunction(){

    function namedFunction(){}

    return namedFunction
}

function returnsAnAnonymousFunction(){

    return ()=>{}
}