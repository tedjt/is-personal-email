
var personal = require('personal-email-domains');

var DOMAIN_REGEX = [
  /hotmail\./,
  /live\./,
  /gmail\./,
  /yandex\./
]

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
  var domainTest = (domain in domains);
  if (!domainTest) {
    // check wildcards
    domainTest = DOMAIN_REGEX.some(function(r) {
      return r.test(domain);
    });
  }
  return domainTest;
}
