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

            // Variables globales de la función

            let captureButton = document.querySelector(".capture_button");
            let cameraImg = document.getElementById("cameraImg");
            let finishCaptureButton = document.querySelector(".finish_capture_button");
            let recordImg = document.getElementById("recordImg");
            let repeatButton = document.querySelector(".repeat_button");
            let uploadButton = document.querySelector(".upload_button");
            let vistaPrevia = document.getElementById("preview");
            const apiKey = "nlzm1uqvJd1LB9FZMds6OIhmeoZm6AIh";

            // Se crea objeto recorder desde la libreria

            recorder = RecordRTC(recordGif, {
                type: 'gif',
                frameRate: 1,
                quality: 10,
                width: 360,
                hidden: 240,
                onGifRecordingStarted: function() {
                    console.log('recorder iniciado')
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

                form.append("archivo", recorder.getBlob(), "myGif.gif");
                console.log(form.get("archivo"));

                // Crea una URL para asignarsela a un objeto del DOM

                let createdUrl = URL.createObjectURL(form.get("archivo"));
                vistaPrevia.setAttribute("src", createdUrl);

                // Oculta botón de stop y muestra botones siguientes

                finishCaptureButton.style.display = "none";
                recordImg.style.display = "none";
                repeatButton.style.display = "block";
                uploadButton.style.display = "block";

                // Oculta el video y muestra la vista previa

                video_Container.style.display = "none";
                vistaPrevia.style.display = "block";

            })

            repeatButton.addEventListener("click", () => {

                video_Container.style.display = "block";
                vistaPrevia.style.display = "none";
                repeatButton.style.display = "none";
                uploadButton.style.display = "none";
                captureButton.style.display = "block";
                cameraImg.style.display = "block";

                // vistaPrevia.setAttribute("src", "");
                // delete createdUrl;
                // delete form;

                recorder.destroy();

                recorder = RecordRTC(recordGif, {
                    type: 'gif',
                    frameRate: 1,
                    quality: 10,
                    width: 360,
                    hidden: 240,
                    onGifRecordingStarted: function() {
                        console.log('recorder iniciado')
                    },
                });
            })

            uploadButton.addEventListener("click", async function() {

                let formdata = new FormData();

                formdata.append("api_key", "nlzm1uqvJd1LB9FZMds6OIhmeoZm6AIh");
                formdata.append("archivo", recorder.getBlob(), "gif1.gif");

                let requestOptions = {
                    method: 'POST',
                    body: formdata,
                    redirect: 'follow'
                };

                await fetch("https://upload.giphy.com/v1/gifs", requestOptions)
                    .then(response => response.text())
                    .then(result => result.split('"', 6))
                    .then((result) => {
                        (console.log("Gif Id is: " + result[5]));
                        return gifId = result[5]
                    })
                    // .then(result => console.log(result))
                    .catch(error => console.log('error', error));

            })

        })
        .catch(function(error) {

            alert("Es necesario permitir el uso de la cámara para continuar - " + error)

        })

}