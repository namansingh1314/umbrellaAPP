function color_change(color){
    if (color == "blue"){
        document.getElementById("image").src = "./blueumbrella.png";
        // document.getElementById("body").style.backgroundColor=rgb(230,246,252);

    }
    else if(color=="yellow"){
        document.getElementById("image").src = "./yellowumbrella.png";
        // document.getElementById("body").style.backgroundColor=rgb(255,250,237);
    }
    else if(color=="pink"){
        document.getElementById("image").src = "./pinkumbrella.png";

    }
}

function uploadFile(event){
    var img  = document.getElementById("image_div")
    var icon  = document.getElementById("icon_img")
    var icon_div  = document.getElementById("icon_div")
    var loader_div  = document.getElementById("loader_div")
    icon.src = URL.createObjectURL(event.target.files[0])
    
    img.style.display = "none"
    icon_div.style.display = "none"
    loader_div.style.display = "block"
    setTimeout(() => {
        loader_div.style.display = "none"
        img.style.display = "block"
        icon_div.style.display = "block"
    }, 3000) //3 sec
}