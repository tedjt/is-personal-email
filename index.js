
var personal = require('personal-email-domains');

/**
 * Expose `isPersonalEmail`.
 */

module.exports = isPersonalEmail;

/**
 * Create a domain map for faster lookups.
 */

var domains = {};
personal.forEach(function (domain) { domains[domain] = true; });

/**
 * Determine whether an email is personal.
 *
 * @param {String} string
 * @return {Boolean}
 */

function isPersonalEmail (email) {
  var domain = email.split('@')[1].toLowerCase();
  return domain in domains;
}