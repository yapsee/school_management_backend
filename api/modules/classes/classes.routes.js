module.exports = function(app) {
  const Ctrl = require('./classes.controller');

  app.route('/classes')
    .get(Ctrl.listAllClasses)
    .post(Ctrl.addClasse);

  app.route('/classes/:id')
    .put(Ctrl.updateOne)
    .get(Ctrl.findOne)
    
};