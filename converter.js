function convert() {
    const fromType = document.getElementById("conversionFrom").value;
    const toType = document.getElementById("conversionTo").value;
    const inputValue = document.getElementById("numberInput").value;

    let result;

    if (fromType === toType) {
        result = inputValue;
    } else {
        if (fromType == "bin") {
            result = parseInt(inputValue, 2);
        } else if (fromType == "oct") {
            result = parseInt(inputValue, 8);
        } else if (fromType == "dec") {
            result = parseInt(inputValue, 10);
        } else if (fromType == "hex") {
            result = parseInt(inputValue, 16);
        }

        if (toType === "bin") {
            result = result.toString(2);
        } else if (toType == "oct") {
            result = result.toString(8);
        } else if (toType == "dec") {
            result = result.toString(10);
        } else if (toType == "hex") {
            result = result.toString(16).toUpperCase();
        }
    }

    playConversionSound();
    document.getElementById("convertedOutput").value = result;
    
}

function playConversionSound() {
    const audio = document.getElementById("conversionSound");

    audio.play();
}

function resetFields() {
    document.getElementById("numberInput").value = "";
    document.getElementById("convertedOutput").value = "";
}

function updateToOptions() {
    const fromType = document.getElementById("conversionFrom").value;
    const toSelect = document.getElementById("conversionTo");

    for (let i = 0; i < toSelect.options.length; i++) {
        toSelect.options[i].disabled = false;
    }

    for (let i = 0; i < toSelect.options.length; i++) {
        if (toSelect.options[i].value === fromType) {
            toSelect.options[i].disabled = true;
            break;
        }
    }
}

function updateInputType() {
    const fromType = document.getElementById("conversionFrom").value;
    const numberInput = document.getElementById("numberInput");

    // Reset input restrictions
    numberInput.removeAttribute("pattern");

    // Apply input restrictions based on selected number system
    if (fromType === "bin") {
        numberInput.setAttribute("pattern", "[01]*");
        numberInput.setAttribute("maxlength", "32");
    } else if (fromType === "oct") {
        numberInput.setAttribute("pattern", "[0-7]*");
        numberInput.setAttribute("maxlength", "11");
    } else if (fromType === "dec") {
        numberInput.setAttribute("pattern", "[0-9]*");
        numberInput.setAttribute("maxlength", "10");
    } else if (fromType === "hex") {
        numberInput.setAttribute("pattern", "[0-9A-Fa-f]*");
        numberInput.setAttribute("maxlength", "8");
    }
}

// Ensure only valid digits are allowed for various number systems
document.getElementById("numberInput").addEventListener("input", function () {
    const fromType = document.getElementById("conversionFrom").value;
    const inputValue = this.value;

    if (fromType === "bin" && !/^[01]*$/.test(inputValue)) {
        this.value = inputValue.substring(0, inputValue.length - 1);
    } else if (fromType === "oct" && !/^[0-7]*$/.test(inputValue)) {
        this.value = inputValue.substring(0, inputValue.length - 1);
    } else if (fromType === "dec" && !/^[0-9]*$/.test(inputValue)) {
        this.value = inputValue.substring(0, inputValue.length - 1);
    } else if (fromType === "hex" && !/^[0-9A-Fa-f]*$/.test(inputValue)) {
        this.value = inputValue.substring(0, inputValue.length - 1);
    }
});
function logout () {
    window.location.href = 'index.html';
}