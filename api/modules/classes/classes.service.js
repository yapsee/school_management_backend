const Classs = require('./classes.schema');

module.exports.getClasses = async () => {
  const  classes = await Classs.find();
  return classes;
}

module.exports.addClasse = async (classData) => {
  console.log(classData);
  const  classe = await Classs.create(classData);
  return classe;
}

module.exports.updateClasse = async (id, classData) => {
  const  classe = await Classs.findOneAndUpdate({ _id: id }, classData);
  return classe;
}

  module.exports.findOneClasse = async (id) => {
  const  classe = await Classs.findOne({ _id: id });
  return classe;
}

module.exports.getClasseByName = async (name) => {
  const  classe = await Classs.findOne({ name: name });
  return classe;

}