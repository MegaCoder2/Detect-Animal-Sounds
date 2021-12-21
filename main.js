function start()
{
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/uvA7CIyct/model.json", modelready)
}
function modelready()
{
    console.log("Model loaded!")
    classifier.classify(gotresult)
}
function gotresult(error, result)
{
    console.log(result)
}