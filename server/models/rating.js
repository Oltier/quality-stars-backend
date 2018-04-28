'use strict';

module.exports = function(Rating) {
  Rating.validatesNumericalityOf('value', {int: true});
  Rating.validatesInclusionOf('value', {in: [1,2,3,4,5]});
};
