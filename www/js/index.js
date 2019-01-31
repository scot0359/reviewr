let pages = [];
let data = [];

document.addEventListener("DOMContentLoaded", init);
document.addEventListener('deviceready', init);

function init() {

    document.getElementById("btnFab").addEventListener('click', takePhoto);

    pages = document.querySelectorAll(".page");
    console.log(pages);

    document.getElementById("btnSend").addEventListener("click", function () {
        console.log("moving from page 1 to page 2");
        pages[0].classList.remove("active");
        pages[1].classList.add("active");
    });

    //    document.getElementById("btnFab").addEventListener("click", function () {
    //        pages[0].classList.toggle("active");
    //        pages[2].classList.toggle("active");
    //    });

    document.getElementById("btnBack1").addEventListener("click", function () {
        pages[0].classList.add("active");
        pages[1].classList.remove("active");
    });

    document.getElementById("btnBack2").addEventListener("click", function () {
        pages[0].classList.add("active");
        pages[2].classList.remove("active");
    });

    document.getElementById("btnBack3").addEventListener("click", function () {
        pages[0].classList.add("active");
        pages[2].classList.remove("active");
    });

    document.getElementById("btnBack4").addEventListener("click", function () {
        pages[0].classList.add("active");
        pages[2].classList.remove("active");
        
        document.getElementById("btnSend").innerHTML = localStorage.getItem(JSON.parse("KEY"))
    });


}


//******************CAMERA*********************//
function takePhoto() {
    let opts = {
        quality: 80,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        mediaType: Camera.MediaType.PICTURE,
        encodingType: Camera.EncodingType.JPEG,
        cameraDirection: Camera.Direction.BACK,
        targetWidth: 300,
        targetHeight: 300
    };
    navigator.camera.getPicture(photoSuccess, photoError, opts);
}

function photoSuccess(imgURI) {
    document.getElementById("msg").textContent = imgURI;
    document.getElementById("image").src = imgURI;
    pages[0].classList.toggle("active");
    pages[2].classList.toggle("active");

    
    
    //***********Local Storage****************//
    
    let title = document.querySelector("#title").value;

    let obj = {
        id: Date.now(),
        title: title
    }

    data.push(obj)

    localStorage.setItem("KEY", JSON.stringify(data));

}

function photoError(msg) {
    document.getElementById("msg").textContent = msg;
}
