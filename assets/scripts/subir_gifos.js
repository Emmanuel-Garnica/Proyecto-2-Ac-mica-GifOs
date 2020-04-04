function allowRecord() {

    document.querySelector(".recordGif").style.display = "block";
    document.querySelector(".createGif").style.display = "none";

    // Pide permisos al usuario

    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            height: 440,
            width: 838
        }
    })

    .then(function(recordGif) {

            // Conecta lo que captura la cámara con el contenedor del video

            let video_Container = document.querySelector("video");

            video_Container.srcObject = recordGif;
            video_Container.play();

            let captureButton = document.querySelector(".capture_button");
            let cameraImg = document.getElementById("cameraImg");
            let finishCaptureButton = document.querySelector(".finish_capture_button");
            let recordImg = document.getElementById("recordImg");

            // Se crea objeto recorder desde la libreria

            recorder = RecordRTC(recordGif, {
                type: 'gif',
                frameRate: 1,
                quality: 10,
                width: 360,
                hidden: 240,
                onGifRecordingStarted: function() {
                    console.log('started')
                },
            });

            captureButton.addEventListener("click", () => {

                recorder.startRecording();
                console.log("Grabación iniciada!");

                captureButton.style.display = "none";
                cameraImg.style.display = "none";
                finishCaptureButton.style.display = "block";
                recordImg.style.display = "block";

            })

            finishCaptureButton.addEventListener("click", () => {

                recorder.stopRecording();
                console.log("Grabación Finalizada!");

                let form = new FormData();

                form.append("archivo", recorder.getBlob(), "Mi gif 1");
                console.log(form.get("archivo"));

                // declarar variable para URL: URL.createObjectURL +(form.get("archivo"))(formget en guias), seleccionar objeto de imagen y cambiar el src 

                // Oculta botón de stop y muestra siguientes

                let finishCaptureButton = document.querySelector(".finish_capture_button");
                let recordImg = document.getElementById("recordImg");
                let repeatButton = document.querySelector(".repeat_button");
                let uploadButton = document.querySelector(".upload_button");

                finishCaptureButton.style.display = "none";
                recordImg.style.display = "none";
                repeatButton.style.display = "block";
                uploadButton.style.display = "block";

            })

        })
        .catch(function(error) {

            alert("Es necesario permitir el uso de la cámara para continuar - " + error)

        })

}


// function record() {

//     // Muestra la siguiente ventana y activa la cámara en el contenedor del video

//     startButton();
//     allowRecord();
// }