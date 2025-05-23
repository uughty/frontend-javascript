/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

export const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

export const cpp = new Subjects.Cpp();
cpp.setTeacher = cTeacher;
console.log("C++");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

export const java = new Subjects.Java();
java.setTeacher = cTeacher;
console.log("Java");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

export const react = new Subjects.React();
react.setTeacher = cTeacher;
console.log("React");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());