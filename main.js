Webcam.set({

    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
})

camera = document.getElementById("camera");

Webcam.attach("#camera");

function takeimage(){

Webcam.snap(function(data_url){
    document.getElementById("result").innerHTML = "<img id='img1' src='>" + data_url + "'/>";

})
}

model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BRrK9fQ7v/model.json", modelloaded)

function modelloaded(){

console.log("model has been loaded");

}