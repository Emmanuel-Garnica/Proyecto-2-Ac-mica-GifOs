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

            let video_Container = document.querySelector("video");

            video_Container.srcObject = recordGif;
            video_Container.play();
        })
        .catch(function(error) {

            alert("Es necesario permitir el uso de la cámara para continuar - " + error)

        })
}

function record() {
    startButton();
    allowRecord();
}

function startRecording() {

    let captureButton = document.querySelector(".capture_button");
    let cameraImg = document.getElementById("cameraImg");
    let finishCaptureButton = document.querySelector(".finish_capture_button");
    let recordImg = document.getElementById("recordImg");

    captureButton.style.display = "none";
    cameraImg.style.display = "none";
    finishCaptureButton.style.display = "block";
    recordImg.style.display = "block";

    let mediaStream = document.querySelector(".myGifOs_box");

    let recorder = new MediaStreamRecorder(mediaStream, {
        type: 'gif',
        frameRate: 1,
        quality: 10,
        width: 360,
        hidden: 240,
        onGifRecordingStarted: function() {
            console.log('started')
        },
    });

    recorder.startRecording();
    console.log("Grabación iniciada!");
    // recorder.on("startRecord", function() {

    //     console.log("Grabación iniciada!")

    // });

    // recorder.on("finishRecord", function() {

    //     let videoBlob = recorder.recordedData.video;
    //     console.log("Grabación terminada: ", videoBlob);

    // });
}

function finishRecording() {

    let finishCaptureButton = document.querySelector(".finish_capture_button");
    let recordImg = document.getElementById("recordImg");
    let repeatButton = document.querySelector(".repeat_button");
    let uploadButton = document.querySelector(".upload_button");

    finishCaptureButton.style.display = "none";
    recordImg.style.display = "none";
    repeatButton.style.display = "block";
    uploadButton.style.display = "block";

}