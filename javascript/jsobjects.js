const student = {
    name: "kirti",
    age: 20,
    branch: "cse",
    language: [{
        lang1: "java",
        lang2: "python"
    },
    {
        db1: "mysql",
        db2: "oracle"
    }
    ]
}
console.log(student)
console.log(student.language)
console.log(student['language'][0]['lang1'])
console.log(student.language[1].db1)
// console.log(student.language.lang1)
student.college="ABES"
console.log(student)
delete student.name
console.log(student)