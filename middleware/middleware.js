'use strict';
//requires the method-override dependecy
const methodOverride = require('method-override');

module.exports = {
  override: (request, response, next) => {
    return methodOverride((request, response) => {
      if (request.body && typeof request.body === 'object' && '_method' in request.body) {
        //look in the urlencoded POST body and delete _method
        //change to a put or delete
        let method = request.body._method;
        delete request.body._method;
        return method;
      }
    })
  }
}


