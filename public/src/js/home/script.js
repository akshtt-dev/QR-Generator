document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  var url = document.querySelector('input[name="url"]').value;

  fetch("/generate-qr", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: url }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.qrCode) {
        const qrCodeImg = document.getElementById("qrcode");
        qrCodeImg.src = data.qrCode;
        qrCodeImg.style.display = "block";

        const downloadLink = document.getElementById("download-link");
        downloadLink.href = data.qrCode; // Set the href to the base64 QR code image
        downloadLink.style.display = "block"; // Show the download button
      } else {
        console.error("QR Code generation failed");
      }
    })
    .catch((error) => console.error("Error:", error));
});
