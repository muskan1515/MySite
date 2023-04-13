'use strict';

/**
 * Module dependencies
 */

var url = require('url');
var request = require('request');
var extend = require('deep-extend');

// Package version
var VERSION = require('../package.json').version;

function Buffer (options) {
  if (!(this instanceof Buffer)) return new Buffer(options);

  this.VERSION = VERSION;

  // Merge the default options with the client submitted options
  this.options = extend({
    access_token: null,
    rest_base: 'https://api.bufferapp.com/1',
    request_options: {
      headers: {
        'Accept': '*/*',
        'Connection': 'close',
        'User-Agent': 'node-buffer/' + VERSION
      }
    }
  }, options);

  // Build a request object
  this.request = request.defaults(
    extend(
      // Pass the client submitted request options
      this.options.request_options,{}
    )
  );
}

Buffer.prototype.__buildEndpoint = function(path, base) {
  var endpoint = this.options.rest_base;

  if (url.parse(path).protocol !== null) {
    endpoint = path;
  }
  else {
    endpoint += (path.charAt(0) === '/') ? path : '/' + path;
  }
  // Remove trailing slash
  endpoint = endpoint.replace(/\/$/, "");

  // Add json extension if not provided in call
  endpoint += (path.split('.').pop() !== 'json') ? '.json' : '';

  endpoint += this.options.access_token.length ? '?access_token='+this.options.access_token : '';
  console.log('endpoint = ' + endpoint + ' path = '+path);
  return endpoint;
};

Buffer.prototype.__request = function(method, path, params, callback) {

  var base = 'rest';

  // Set the callback if no params are passed
  if (typeof params === 'function') {
    callback = params;
    params = {};
  }

  // Set API base
  if (typeof params.base !== 'undefined') {
    base = params.base;
    delete params.base;
  }

  // Build the options to pass to our custom request object
  var options = {
    method: method.toLowerCase(),  // Request method - get || post
    url: this.__buildEndpoint(path, base) // Generate url
  };

  // Pass url parameters if get
  if (method === 'get') {
    options.qs = params;
  }

  // Pass form data if post
  if (method === 'post') {
    var formKey = 'form';

    options[formKey] = params;
  }

  this.request(options, function(error, response, data){
    if (error) {
      callback(error, data, response);
    }
    else {
      try {
        data = JSON.parse(data);
      }
      catch(parseError) {
        callback(
          new Error('Status Code: ' + response.statusCode),
          data,
          response
        );

      }
      if (typeof data.errors !== 'undefined') {
        callback(data.errors, data, response);
      }
      else if(response.statusCode !== 200) {
        callback(
          new Error('Status Code: ' + response.statusCode),
          data,
          response
        );
      }
      else {
        callback(null, data, response);
      }
    }
  });
};

/**
 * GET
 */
Buffer.prototype.get = function(url, params, callback) {
  return this.__request('get', url, params, callback);
};

/**
 * POST
 */
Buffer.prototype.post = function(url, params, callback) {
  return this.__request('post', url, params, callback);
};

module.exports = Buffer;
