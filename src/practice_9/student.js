import Person from "../../src/practice_9/person.js";
class Student extends Person {
  constructor(num,name,age,klass) {
    super(num,name,age);
    this.klass=klass;
  }
  introduce(){
    if(this.klass.leader){
      return super.introduce()+' '+`I am a Student. I am Leader of ${this.klass.getDisplayName()}.`
    }
    return super.introduce()+' '+`I am a Student. I am at ${this.klass.getDisplayName()}.`;
  }
}
export default Student;
