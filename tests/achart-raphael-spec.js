var expect = require('expect.js');
var Raphael = require('../index'),
  $ = require('jquery');

$('<div id="r1"></div>').appendTo('body');



var paper = Raphael('r1',500,300);

describe('achart-raphael', function() {

  it('raphael create', function() {
    expect(paper).not.to.be(undefined);
  });
  it('circle',function(){
    var circle = paper.circle(50, 40, 10);
    // Sets the fill attribute of the circle to red (#f00)
    circle.attr("fill", "#f00");
  });
});
