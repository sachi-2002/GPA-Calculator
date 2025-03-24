let gpa = 0;
let subCount = 0;
let GPA = 0;

function resultsAdder(v) {
    let res = document.getElementById("givenIn");
    let labels = res.getElementsByTagName("label");
    let gpaVal = document.getElementById("gpaVal");

    let grades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "E"];
    let gpaValues = [4.0, 4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.7, 1.3, 1.0, 0.0];

    if (labels.length != 12) {
        if (v >= 1 && v <= 12) {
            res.innerHTML += `<label class="grade">${grades[v - 1]}</label>`;
            gpa = gpa + gpaValues[v - 1];
            subCount++;
        }
    }

    gpaVal.innerHTML = Math.round(gpa / subCount * 100) / 100;

}

function clearAll() {
    let res = document.getElementById("givenIn");
    res.innerHTML = "";
    let gpaVal = document.getElementById("gpaVal");
    gpaVal.innerHTML = "0.0";
    gpa = 0;
    subCount = 0;
}

function deleteLast(){
    
}