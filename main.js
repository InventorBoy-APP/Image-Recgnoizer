Webcam.set({
    width:350,
    height:300,
    image_format:"jpg",
    jpg_quality:90
});

wc=document.getElementById("wc");
Webcam.attach(wc);

function captureimage(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='img' src="+data_uri+">"
    })
}

console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/oKWGa8x23/model.json',modelLoaded);

function modelLoaded(){
    console.log("modelLoaded :)");

}

function identifyimage(){
   storageimg=document.getElementById("img");
   classifier.classify(img,gotResult); 
}

function gotResult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("next_to").innerHTML=results[0].label;
    document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}
  