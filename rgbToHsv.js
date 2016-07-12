#!/usr/local/bin/node

var arguments = process.argv;

var rr, gg, bb,
    r = arguments[2] / 255,
    g = arguments[3] / 255,
    b = arguments[4] / 255,
    h, s,
    v = Math.max(r, g, b),
    diff = v - Math.min(r, g, b),
    diffc = function (c)
    {
        return (v - c) / 6 / diff + 1 / 2;
    };

if (diff == 0)
{
    h = s = 0;
}
else
{
    s = diff / v;
    rr = diffc(r);
    gg = diffc(g);
    bb = diffc(b);

    if (r === v) {
        h = bb - gg;
    } else if (g === v) {
        h = (1 / 3) + rr - bb;
    } else if (b === v) {
        h = (2 / 3) + gg - rr;
    }
    if (h < 0) {
        h += 1;
    } else if (h > 1) {
        h -= 1;
    }
}
var result =
{
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100)
};

console.log(result);