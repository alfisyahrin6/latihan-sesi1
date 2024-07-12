function saklar() {
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");

    let lamp1 = document.getElementById("lamp1");
    let lamp2 = document.getElementById("lamp2");
    let lamp3 = document.getElementById("lamp3");
    // menggunakan toggle
    if (toggle1.checked){
        lamp1.src = "assets/images/on.gif"
        console.log('dinyalakan')
    } else {
        lamp1.src = "assets/images/off.gif"
        console.log('dimatikan')
    }
    if (toggle2.checked){
        lamp2.src = "assets/images/on.gif"
        console.log('dinyalakan')
    } else {
        lamp2.src = "assets/images/off.gif"
        console.log('dimatikan')
    }
    if (toggle3.checked){
        lamp3.src = "assets/images/on.gif"
        console.log('dinyalakan')
    } else {
        lamp3.src = "assets/images/off.gif"
        console.log('dimatikan')
    }
}

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
