function removeColor(){
    let x = document.getElementById("colorSelect");
    if(x.value !==""){
        x.remove(x.selectedIndex);
    }
}
function changeColors(){
    let x = document.getElementById("colors");
    document.getElementById("textColoring").style.color = x.value;
}
function getNames(){
    let x = document.getElementById("fName").value;
    let y = document.getElementById("lName").value;
    
    document.getElementById("fullname").innerHTML = x+" "+y;
    document.getElementById("fullname").style.display = "visible";
}
function findVolume(){
    let x = document.getElementById("radius").value;
    document.getElementById("volume").innerHTML = 4/3*3.14*x*x*x +" cubic cm";
}
function randomPic(){
    let x = document.getElementById("randomPic");
    let y = Math.floor((Math.random()*3)+1);

    if(y===1){
        x.src = "https://cdn-icons-png.flaticon.com/256/10847/10847210.png";
    }else if(y===2){
        x.src = "https://cdn-icons-png.flaticon.com/256/10847/10847229.png";
    }else if(y===3){
        x.src = "https://cdn-icons-png.flaticon.com/256/10847/10847257.png";
    }
}