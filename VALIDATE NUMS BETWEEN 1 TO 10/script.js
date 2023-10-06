let x = parseInt(document.getElementById("num").value);

function validateNum() {
    let text;
    console.log("x:", x);
    console.log("isNaN(x):", isNaN(x));
    if (x >= 1 || x <= 10) {
        text = "Input is OK";
    } else {
        text = "Input Not valid";
    }
    document.getElementById("submit-text").innerHTML = text;
}

const btn = document.getElementById("button");
btn.addEventListener("click", validateNum);

// WILL TRY LATER