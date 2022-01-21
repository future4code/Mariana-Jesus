function opcoes(){
    let algo 

    if(typeof algo === 'string'){
        console.log('string')
    }else if(typeof algo === 'number'){
        console.log('number')
    }else if(typeof algo === 'boolean'){
        console.log('boolean')
    }else if(typeof algo === 'undefined'){
        console.log('undefined')
    }else if(typeof algo === 'object'){
        console.log('object')
    }else if(typeof algo === 'function'){
        console.log('function')
    }
}
opcoes()