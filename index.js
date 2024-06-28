let grade_points = {
    "O":10,
    "A+":9,
    "A":8,
    "B+":7,
    "B":6,
    "C":5,
    "W":0,
    "F":0,
    "Ab":0,
    "I":0,
    "*":0
};

let iniCount = 6;

let listOfCredits = [];

let listOfGrades = [];

let sumOfCredits = 0;

let sumOfGradePoints = 0;

let gradevalue = [];

let gradePointsMulCredit = [];

let cgpa;

document.getElementById('addcourse').addEventListener("click",()=>{ 
    const row = document.createElement("tr")
    row.innerHTML = `
    <th scope="row">${iniCount}</th>
    <td><input  id="credits" class="inputs" type="number" step="1" min="0" max="10"></td>
    <td>
        <select name="grade" id="grade" class="grades">
        <option value="O">O</option>
        <option value="A+">A+</option>
        <option value="A">A</option> 
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="W">W</option>
        <option value="*">*</option>
        <option value="Ab">Ab</option>
        <option value="I">I</option>
        <option value="F">F</option>
        </select>
    </td>`
    document.getElementById("rowlist").appendChild(row)
iniCount++;
})

document.getElementsByClassName("submitbtn")[0].addEventListener("click", ()=> {
    let numberOfInputs = document.getElementsByClassName("inputs").length;
    for(let i = 0; i<numberOfInputs; i++){     
        listOfCredits.push(document.getElementsByClassName("inputs")[i].value);
    }

    let intCreditsArray = listOfCredits.map(Number);

    let numberOfGrade = document.getElementsByClassName("grades").length;
    for(let i = 0; i<numberOfGrade;i++){
        listOfGrades.push(document.getElementsByClassName("grades")[i].value);
        console.log(listOfGrades);
        gradevalue = (grade_points[listOfGrades[i]])*(intCreditsArray[i]);
        gradePointsMulCredit.push(gradevalue);
    } 
    
    for(let j = 0; j<intCreditsArray.length;j++){
        sumOfCredits+=intCreditsArray[j];
    }

    for(let k = 0; k<gradePointsMulCredit.length;k++){
        sumOfGradePoints+=gradePointsMulCredit[k];
    }

    cgpa = sumOfGradePoints/sumOfCredits;
    document.getElementById("results").innerText = "Your CGPA is " + cgpa.toFixed(3);

    gradePointsMulCredit = [];
    sumOfCredits = 0;
    sumOfGradePoints = 0;
    listOfCredits = [];
    listOfGrades = [];
    intCreditsArray = [];
})