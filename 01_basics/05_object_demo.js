
const course = {
    name: "javaScript",
    price: 299,
    courseInst: "Priyaranjan"
}

// important
// distructure object

const {courseInst} = course // same as course.courseInst or course["courseInst"]
console.log(courseInst)

const {courseInst: inst} = course // inst short form of courseInst
console.log(inst)

