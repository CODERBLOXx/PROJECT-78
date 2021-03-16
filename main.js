var Names = [
    "Rajagopal C R",
    "Sailaxmi R",
    "Prithviraj Rajagopal",
    "Siddhaarth R"
];
var images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtujVUl2LfZ7uCezvPCWIBpK9b-Yv9ik8PA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqRyEwtPyXq8Egz5B2Z5qBVjXrTiznkoycQ&usqp=CAU",
    "https://clipartart.com/images450_/smiling-child-clipart.png",
    "https://www.kindpng.com/picc/m/201-2019458_tired-girl-cliparts-child-clipart-hd-png-download.png"
];
var i=0;
function NextSlide(){
    document.getElementById("Name").innerHTML = Names[i];
    document.getElementById("Album").src = images[i];
    i++;
}