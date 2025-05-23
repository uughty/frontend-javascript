namespace Subjects {
  export class Subject {
    private _teacher: Teacher | undefined;

    set setTeacher(value: Teacher) {
      this._teacher = value;
    }

    get teacher(): Teacher | undefined {
      return this._teacher;
    }
  }
}
