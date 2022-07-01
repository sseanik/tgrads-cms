'use strict';

/**
 * grad service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::grad.grad');
