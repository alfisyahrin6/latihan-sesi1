function saklar() {

    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    let toggle4 = document.getElementById("default-toggle4");
    let toggle5 = document.getElementById("default-toggle5");
    let toggle6 = document.getElementById("default-toggle6");
    let toggle7 = document.getElementById("default-toggle7");
    let toggle8 = document.getElementById("default-toggle8");
    let toggle9 = document.getElementById("default-toggle9");
    let toggle10 = document.getElementById("default-toggle10");


    let lamp1 = document.getElementById("lamp1");
    let lamp2 = document.getElementById("lamp2");
    let lamp3 = document.getElementById("lamp3");
    let lamp4 = document.getElementById("lamp4");
    let lamp5 = document.getElementById("lamp5");
    let lamp6 = document.getElementById("lamp6");
    let lamp7 = document.getElementById("lamp7");
    let lamp8 = document.getElementById("lamp8");
    let lamp9 = document.getElementById("lamp9");
    let lamp10 = document.getElementById("lamp10");

    // menggunakan toggle
    if (toggle1.checked){
        lamp1.src = "assets/images/on.gif"
    } else {
        lamp1.src = "assets/images/off.gif"
    }
    if (toggle2.checked){
        lamp2.src = "assets/images/on.gif"
    } else {
        lamp2.src = "assets/images/off.gif"
    }
    if (toggle3.checked){
        lamp3.src = "assets/images/on.gif"
    } else {
        lamp3.src = "assets/images/off.gif"
    }
    if (toggle4.checked){
        lamp4.src = "assets/images/on.gif"
    } else {
        lamp4.src = "assets/images/off.gif"
    }
    if (toggle5.checked){
        lamp5.src = "assets/images/on.gif"
    } else {
        lamp5.src = "assets/images/off.gif"
    }
    if (toggle6.checked){
        lamp6.src = "assets/images/on.gif"
    } else {
        lamp6.src = "assets/images/off.gif"
    }
    if (toggle7.checked){
        lamp7.src = "assets/images/on.gif"
    } else {
        lamp7.src = "assets/images/off.gif"
    }
    if (toggle8.checked){
        lamp8.src = "assets/images/on.gif"
    } else {
        lamp8.src = "assets/images/off.gif"
    }
    if (toggle9.checked){
        lamp9.src = "assets/images/on.gif"
    } else {
        lamp9.src = "assets/images/off.gif"
    }
    if (toggle10.checked){
        lamp10.src = "assets/images/on.gif"
    } else {
        lamp10.src = "assets/images/off.gif"
    }   
}

function saklarKeluarga (){
let toggleRuang1 = document.getElementById("toggle-ruang1");

    if (toggleRuang1.checked){
        lamp1.src = "assets/images/on.gif";
        lamp2.src = "assets/images/on.gif";
        lamp3.src = "assets/images/on.gif";
    console.log('nyala')
    } 
    else {
        lamp1.src = "assets/images/off.gif"
        lamp2.src = "assets/images/off.gif"
        lamp3.src = "assets/images/off.gif"
    console.log('mati')
}
}
function saklarMakan (){
let toggleRuang2 = document.getElementById("toggle-ruang2");
    if (toggleRuang2.checked){
        lamp4.src = "assets/images/on.gif"
    console.log('nyala')
    } 
    else {
        lamp4.src = "assets/images/off.gif"
    console.log('mati')
}
}
function saklarTidur (){
let toggleRuang3 = document.getElementById("toggle-ruang3");
    if (toggleRuang3.checked){
        lamp5.src = "assets/images/on.gif"
        lamp6.src = "assets/images/on.gif"
    console.log('nyala')
    } 
    else {
        lamp5.src = "assets/images/off.gif"
        lamp6.src = "assets/images/off.gif"
    console.log('mati')
}
}
function saklarTamu (){
let toggleRuang4 = document.getElementById("toggle-ruang4");
    if (toggleRuang4.checked){
        lamp7.src = "assets/images/on.gif"
        lamp8.src = "assets/images/on.gif"
        lamp9.src = "assets/images/on.gif"
        lamp10.src = "assets/images/on.gif"
    console.log('nyala')
    } 
    else {
        lamp7.src = "assets/images/off.gif"
        lamp8.src = "assets/images/off.gif"
        lamp9.src = "assets/images/off.gif"
        lamp10.src = "assets/images/off.gif"
    console.log('mati')
}
}


// function saklar() {
//     let toggle1 = document.getElementById("default-toggle1");
//     let toggle2 = document.getElementById("default-toggle2");
//     let toggle3 = document.getElementById("default-toggle3");
//     let toggle4 = document.getElementById("default-toggle4");

//     let lamp1 = document.getElementById("lamp1");
//     let lamp2 = document.getElementById("lamp2");
//     let lamp3 = document.getElementById("lamp3");
//     let lamp4 = document.getElementById("lamp4");
//     // menggunakan toggle
//     if (toggle1.checked){
//         lamp1.src = "assets/images/on.gif"
//         console.log('dinyalakan')
//     } else {
//         lamp1.src = "assets/images/off.gif"
//         console.log('dimatikan')
//     }
//     if (toggle2.checked){
//         lamp2.src = "assets/images/on.gif"
//         console.log('dinyalakan')
//     } else {
//         lamp2.src = "assets/images/off.gif"
//         console.log('dimatikan')
//     }
//     if (toggle3.checked){
//         lamp3.src = "assets/images/on.gif"
//         console.log('dinyalakan')
//     } else {
//         lamp3.src = "assets/images/off.gif"
//         console.log('dimatikan')
//     }
//     if (toggle4.checked){
//         lamp4.src = "assets/images/on.gif"
//         console.log('dinyalakan')
//     } else {
//         lamp4.src = "assets/images/off.gif"
//         console.log('dimatikan')
//     }
    
// }


    // menggunakan button
    // if (action == "on") {
    //         if(lamp == 1){
    //         lamp1.src = "assets/images/on.gif"
    //         }
    //         if(lamp == 2){
    //         lamp2.src = "assets/images/on.gif"
    //         }
    //         if(lamp == 3){
    //         lamp3.src = "assets/images/on.gif"
    //         }
    // }
    // if (action == "off") {
    //     if(lamp == 1){
    //         lamp1.src = "assets/images/off.gif"
    //         }
    //         if(lamp == 2){
    //         lamp2.src = "assets/images/off.gif"
    //         }
    //         if(lamp == 3){
    //         lamp3.src = "assets/images/off.gif"
    //         }
    //         return action;
    // }
