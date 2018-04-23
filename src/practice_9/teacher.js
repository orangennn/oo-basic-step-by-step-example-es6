import Person from "../../src/practice_9/person.js";
class Teacher extends Person{
  constructor(num,name,age,klass) {
    super(num,name,age);
    this.klass=klass;
  }
  introduce(){
    if(this.klass){
      return super.introduce()+` I am a Teacher. I teach ${this.klass.getDisplayName()}.`;
    }
    return super.introduce()+` I am a Teacher. I teach No Class.`;
  }
  introduceWith(student){
    if(student.klass.number==this.klass.number){
      return super.introduce()+` I am a Teacher. I teach ${student.name}.`;
    }
    return super.introduce()+` I am a Teacher. I don't teach ${student.name}.`
  }
}
export default Teacher;
