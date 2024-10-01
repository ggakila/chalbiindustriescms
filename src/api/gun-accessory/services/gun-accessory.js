'use strict';

/**
 * gun-accessory service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gun-accessory.gun-accessory');
