'use strict';

/**
 * cruise service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cruise.cruise');
