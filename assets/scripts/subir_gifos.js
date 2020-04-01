function startButton() {
    document.querySelector(".recordGif").style.display = "block";
    document.querySelector(".createGif").style.display = "none";
}

function allowRecord() {
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            height: 440,
            width: 838
        }
    })

    .then(function(recordGif) {

        let video_Container = document.getElementsByTagName("video")[0];

        video_Container.srcObject = recordGif;
        video_Container.play();
    })
}

function record() {
    startButton();
    allowRecord();
}

// let recordGifDisplay = document.querySelector(".createGif").style.display;

// if (recordGifDisplay === "block") {
//     allowRecord();
// }