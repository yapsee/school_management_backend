
const classservice = require('./classes.service');

module.exports.listAllClasses = async (req, res) => {
  const  classes = await classservice.getClasses();
  res.send(classes)
 } 

 module.exports.addClasse = async (req, res) => { 
   console.log(req.body);

  const  classe = await classservice.addClasse(req.body);
  res.send(classe)
 }
module.exports.updateOne = async (req, res) => {
  const  classe = await classservice.updateClasse(req.params.id, req.body);
  res.send(classe)
}

  module.exports.findOne = async (req, res) => {
  const  classe = await classservice.findOneClasse(req.params.id);
  res.send(classe)
}

module.exports.getClasseByName = async (req, res) => {
  const  classe = await classservice.getClasseByName(req.query.name);
  res.send(classe)

}