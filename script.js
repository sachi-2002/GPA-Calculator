let gpa = 0;
let subCount = 0;
let GPA = 0;

let grades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "E"];
let gpaValues = [4.0, 4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.7, 1.3, 1.0, 0.0];

let res = document.getElementById("givenIn");
let gpaVal = document.getElementById("gpaVal");

function resultsAdder(v) {

    if (res.children.length != 12) {
        if (v >= 1 && v <= 12) {
            let choice = prompt("Enter credit value (0-4): if non-credit one just ok");
            let credit = Number(choice);

            if (choice === "") {
               alert("It is non-credit subject!");
            } else if (credit >= 1 && credit <= 4) {
                gpaAdd(v, credit);
            } else {
                alert("Invalid credit value! Enter a number between 0 and 4.");
            }
        }
    }
}

function gpaAdd(v, credit) {

    let entryDiv = document.createElement("div");
    entryDiv.classList.add("entry");

    let gradeLabel = document.createElement("label");
    gradeLabel.classList.add("grade");
    gradeLabel.innerText = grades[v - 1];

    let creditLabel = document.createElement("label");
    creditLabel.classList.add("creditVal");
    creditLabel.innerText = credit;

    entryDiv.appendChild(gradeLabel);
    entryDiv.appendChild(creditLabel);
    res.appendChild(entryDiv);

    if (credit >= 1) {
        gpa += gpaValues[v - 1] * credit;
        subCount += credit;
    }
    gpaVal.innerHTML = subCount > 0 ? (gpa / subCount).toFixed(2) : "0.0";
}

function clearAll() {
    let res = document.getElementById("givenIn");
    res.innerHTML = "";
    let gpaVal = document.getElementById("gpaVal");
    gpaVal.innerHTML = "0.0";
    gpa = 0;
    subCount = 0;
}

function deleteInputs() {
    let res = document.getElementById("givenIn");
    let gpaVal = document.getElementById("gpaVal");

    if (res.children.length > 0) {
        let lastEntry = res.lastElementChild; // Get the last added entry (div)
        let gradeText = lastEntry.getElementsByClassName("grade")[0].innerText;
        let creditValue = parseInt(lastEntry.getElementsByClassName("creditVal")[0].innerText);

        let index = grades.indexOf(gradeText);
        if (index !== -1) {
            gpa -= gpaValues[index] * creditValue;
            subCount -= creditValue;
        }

        lastEntry.remove(); // Remove the entire div

        gpaVal.innerHTML = subCount > 0 ? (gpa / subCount).toFixed(2) : "0.0";
    }
}