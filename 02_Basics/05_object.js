 // object destructuring

 const course = {
    courseName:"frontend Developer",
    courseFee:25000,
    courseInstructor:"Munaf Hajir"
 }

//  console.log(course.courseInstructor);
//  // Munaf Hajir
 
// destructuring

const {courseInstructor} = course
console.log(courseInstructor);
//Munaf Hajir