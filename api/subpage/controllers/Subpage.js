'use strict';

/**
 * Subpage.js controller
 *
 * @description: A set of functions called "actions" for managing `Subpage`.
 */

module.exports = {

  /**
   * Retrieve subpage records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.subpage.search(ctx.query);
    } else {
      return strapi.services.subpage.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a subpage record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.subpage.fetch(ctx.params);
  },

  /**
   * Count subpage records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.subpage.count(ctx.query);
  },

  /**
   * Create a/an subpage record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.subpage.add(ctx.request.body);
  },

  /**
   * Update a/an subpage record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.subpage.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an subpage record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.subpage.remove(ctx.params);
  }
};
