'use strict';

/**
 *  cruise controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cruise.cruise');
