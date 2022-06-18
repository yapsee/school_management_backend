const Student = require('./students.schema');

module.exports.getStudents = async () => {
  const  students = await Student.find().populate('classId');;
  return students;
}

module.exports.addStudent = async (studentData) => {
  const  student = await Student.create(studentData);
  return student;
}

module.exports.updateStudent = async (id, studentData) => {
  const  student = await Student.findOneAndUpdate({ _id: id }, studentData);
  return student;
}

  module.exports.findOneStudent = async (id) => {   
  const  student = await Student.findOne({ _id: id }).populate('classId');
  return student;
}

module.exports.deleteOneStudent = async (id) => {
  const  student = await Student.findOneAndDelete({ _id: id });
  return student;
}