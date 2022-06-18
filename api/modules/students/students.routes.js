module.exports = function(app) {
  const Ctrl = require('./students.controller');

  app.route('/students')
    .get(Ctrl.listAllStudents)
    .post(Ctrl.addStudent);

  app.route('/students/:id')

    .put(Ctrl.updateOne)
    .get(Ctrl.findOne)
    .delete(Ctrl.deleteOne);
 
    
};