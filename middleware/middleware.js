'use strict';
//requires the method-override dependecy
const methodOverride = require('method-override');
// const express = require('express');
// const app = express();

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
  },
  // urlencoded: (request, response, next) => {
  //   return (express.urlencoded({ extended: true })),
  // },

  // static: (request, response, next) => {
  //   return (express.static('../public/')),
  // }, //for the purposes of our site, public is the root folder

}


