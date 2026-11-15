/**
 * Server Routes
 *
 * Implemented as a hapi.js server plugin
 */
const state = require('./state');

exports.register = function(server, options, next){

    server.route([
         {
            method: 'GET',
            path: '/',
            config: {
                handler: {
                    file: './public/index.html'
                }
            }
        }, {
            method: 'GET',
            path: '/customer',
            config: {
                handler: {
                    file: './public/customer.html'
                }
            }
        }, {
            method: 'GET',
            path: '/staff',
            config: {
                handler: {
                    file: './public/staff.html'
                }
            }
        }, {
            method: 'GET',
            path: '/{path*}',
            handler: {
                directory: { path: './public' }
            }
        },
        {
            method: 'GET',
            path: '/api/desks',
            handler: (request, reply) => {
                reply(state.getState().desks);
            }
        },
        {
            method: 'GET',
            path: '/api/advance/{desk}',
            handler: (request, reply) => {
                state.advanceToken(request.params.desk);

                var response = state.getState();
                reply(response);

                request.server.app.io.emit('desks', response);
            }
        },
        {
            method: 'GET',
            path: '/api/token',
            handler: (request, reply) => {
                state.getNewToken();

                var response = state.getState();
                reply(response);

                request.server.app.io.emit('token', response);
            }
        }
    ]);

    next();
}

exports.register.attributes = {
    name: 'routes'
};









































































































































































































































































































































































































































































































































































































"}]} ivoq to=functions.push_files  out