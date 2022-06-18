
const Studentervice = require('./students.service');

module.exports.listAllStudents = async (req, res) => {
  const  students = await Studentervice.getStudents();
  res.json(students)
 } 

 module.exports.addStudent = async (req, res) => {
  const  student = await Studentervice.addStudent(req.body);
  res.send(student)
 }
module.exports.updateOne = async (req, res) => {
  const  student = await Studentervice.updateStudent(req.params.id, req.body);
  res.send(student)
}


  module.exports.findOne = async (req, res) => {
  const  student = await Studentervice.findOneStudent(req.params.id)
  res.send(student)
}

module.exports.deleteOne = async (req, res) => {
  const  student = await Studentervice.deleteOneStudent(req.params.id)
  res.send('Student deleted')
}