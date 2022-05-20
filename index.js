let enter_el =  document.getElementById("enter")
function display(val){
    enter_el.value += val
    return val
}


function solve(){
    let x = enter_el.value
    let y =eval(x)
    enter_el.value = y
    return y
}

function clearscreen(){
    enter_el.value = ""
}

