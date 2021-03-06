module.exports = {
  replaceToken: function(token) {
    let replacements = {
      a: "z",
      b: "y",
      c: "x",
      d: "w",
      e: "v",
      f: "u",
      g: "t",
      h: "s",
      i: "r",
      j: "q",
      k: "p",
      l: "o",
      m: "n",
      n: "m",
      o: "l",
      p: "k",
      q: "j",
      r: "i",
      s: "h",
      t: "g",
      u: "f",
      v: "e",
      w: "d",
      x: "c",
      y: "b",
      z: "a"
    };
  
    for (var e = token.split(""), t = 0; t < e.length; t++) {
      e[t] = replacements.hasOwnProperty(e[t]) ? replacements[e[t]] : e[t];
    }
  
    return e.join("");
  }
}