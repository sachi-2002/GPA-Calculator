let gpa = 0;
let subCount = 0;
let GPA = 0;

let grades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "E"];
let gpaValues = [4.0, 4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.7, 1.3, 1.0, 0.0];

function resultsAdder(v) {
    let res = document.getElementById("givenIn");
    let labels = res.getElementsByTagName("label");
    let gpaVal = document.getElementById("gpaVal");

    if (labels.length != 12) {
        if (v >= 1 && v <= 12) {
            let choice = prompt("Enter credit value: 0,1,2,3,4");
            if (choice >= 0 && choice <= 4) {
                res.innerHTML += `<label class="grade">${grades[v - 1]}</label>`;
                gpa = gpa + gpaValues[v - 1];
                subCount++;
                gpaVal.innerHTML = Math.round(gpa / subCount * 100) / 100;
            } else {
                alert("Wrong input !");
            }
        }
    }

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
    let labels = res.getElementsByTagName("label");
    let gpaVal = document.getElementById("gpaVal");

    if (labels.length > 0) {
        let lastLabel = labels[labels.length - 1];
        let gradeText = lastLabel.innerText;

        let index = grades.indexOf(gradeText);
        if (index !== -1) {
            gpa -= gpaValues[index];
            subCount--;
        }

        lastLabel.remove();

        gpaVal.innerHTML = subCount > 0 ? (Math.round(gpa / subCount * 100) / 100).toFixed(2) : "0.0";
    }
}