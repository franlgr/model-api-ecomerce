// Initializes the `eventos` service on path `/eventos`
const { Eventos } = require('./eventos.class');
const hooks = require('./eventos.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/eventos', new Eventos(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('eventos');

  service.hooks(hooks);
};
