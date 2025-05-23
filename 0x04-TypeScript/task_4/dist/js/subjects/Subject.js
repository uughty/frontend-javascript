"use strict";
var Subjects;
(function (Subjects) {
    class Subject {
        set setTeacher(value) {
            this._teacher = value;
        }
        get teacher() {
            return this._teacher;
        }
    }
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
