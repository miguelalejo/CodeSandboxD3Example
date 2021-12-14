var width = 300,
    height = 300;

// Config for the Radar chart
var config = {
    w: width,
    h: height,
    maxValue: 100,
    levels: 5,
    ExtraWidthX: 300,
    color: function(i) {
      c = ['red', 'yellow', 'pink', 'green', 'blue', 'olive', 'aqua', 'cadetblue', 'crimson'];
      return c[i];
    }
}