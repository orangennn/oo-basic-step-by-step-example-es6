
class Class  {
  constructor(num) {
    this.number=num;
  }
  getDisplayName(){
    return `Class ${this.number}`;
  }
  assignLeader(student){
    if(student.klass.number==this.number){
      this.leader=student;
    }else{
      console.log("It is not one of us.");
    }
  }
  appendMember(student){
    student.klass=this;
  }
}
export default Class;
