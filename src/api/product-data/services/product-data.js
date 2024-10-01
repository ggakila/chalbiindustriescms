'use strict';

/**
 * product-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-data.product-data');
