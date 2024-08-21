let partyLocation = "GARDEN"; // As the message might change.
const shiftValue = 3; // Since the shift value remains constant throughout.
let encryptedMessage = "  "; // This will change when we encode the message with the original party location.
let decryptedMessage = " "; // This will change when we decode the encrypted message to reveal the party location.
let isPartySafe = false; // Hopefully, this doesn't change.
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let encryptingBtn = document.querySelector(".encrypting-btn");
let decryptingBtn = document.querySelector(".decrypting-btn");
let textArea = document.querySelector(".secert-message-box");
let displayBox = document.querySelector(".display-box");
let decryptingBox = document.querySelector(".orginal-text");

// function for turning a message into encrypted
function turnIntoEncrypted(str, shiftValue) {
  return str.replace(/[a-z]/gi, (char) => {
    const charCode = char.charCodeAt(0);
    let encrypted = String.fromCharCode(
      ((charCode - 65 + shiftValue) % 26) + 65
    );
    return encrypted;
  });
}

// function for decrypting the message

//functions for DOM manipulation
let encryptedValue = "";
encryptingBtn.addEventListener("click", function () {
  displayBox.style.display = "block";
  message = textArea.value;
  encryptedValue += turnIntoEncrypted(message, shiftValue);
  displayBox.innerText = encryptedValue;
  textArea.value = "";
});

decryptingBtn.addEventListener("click", function () {
  displayBox.style.display = "none";
  decryptingBox.style.display = "block";
  let decryptingValue = turnIntoEncrypted(encryptedValue, shiftValue);
  decryptingBox.innerText = decryptingValue;
});

// practice
