import Person from "../../src/practice_10/person.js";
class Teacher extends Person{
  constructor(num,name,age,klasses) {
    super(num,name,age);
    this.klasses=klasses;
  }
  introduce(){
    if(this.klasses){
      let str=super.introduce()+' I am a Teacher. I teach Class';
      for(let item of this.klasses){
        str+=` ${item.number},`;
      }
      str=str.substring(0,str.length-1);
      str+='.';
      return str;
    }
    return super.introduce()+` I am a Teacher. I teach No Class.`;
  }
}
export default Teacher;
