let students = [
    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },
    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },
    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }
];

function avg(students) {
    return students.filter(student => {
        let math = student.scores.math;
        let english = student.scores.english;
        let literature = student.scores.literature;
        let average = (math + english + literature) / 3;
        return average >= 8;
    });
}

let highAchievers = avg(students);
console.log(highAchievers);