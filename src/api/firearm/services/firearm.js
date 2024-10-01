'use strict';

/**
 * firearm service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::firearm.firearm');
