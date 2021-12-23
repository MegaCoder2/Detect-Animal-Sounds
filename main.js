function start()
{
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/vvQRp3Def/model.json", modelready)
}
function modelready()
{
    console.log("Model loaded!")
    classifier.classify(gotresult)
}
function gotresult(error, result)
{
    if(error)
    {
        console.error(error)
    }
    else
    {
        console.log(result)
        r = Math.floor(Math.random()*255) + 1
        g = Math.floor(Math.random()*255) + 1
        b = Math.floor(Math.random()*255) + 1
        document.getElementById("result").style.color = "rgb("+r+", "+g+", "+b+")"
        document.getElementById("confindent").style.color = "rgb("+r+", "+g+", "+b+")"
        document.getElementById("result").innerHTML = "I can hear " + result[0].label + "!"
        document.getElementById("confindent").innerHTML = "Accuracy: " + (result[0].confidence * 100).toFixed(2) + "%"
        img = document.getElementById("image")
        if(result[0].label == "Cat Meowing")
        {
            img.src = "meow-e1612557327342.jpeg"
        }
        else if(result[0].label == "Dog Barking")
        {
            img.src = "Yellow-Lab-Puppy-Barking-500x500.jpg"
        }
        else
        {
            img.src = "listen.gif"
        }
    }
}