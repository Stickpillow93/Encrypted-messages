// ok
let x = document.getElementById("txt");
let y = document.getElementById("txt2");
let dict = {
  a: "p",
  b: "y",
  c: "a",
  d: "b",
  e: "s",
  f: "o",
  g: "i",
  h: "v",
  i: "q",
  j: "r",
  k: "z",
  l: "h",
  m: "t",
  n: "c",
  o: "j",
  p: "e",
  q: "g",
  r: "x",
  s: "n",
  t: "f",
  u: "l",
  v: "d",
  w: "u",
  x: "w",
  y: "k",
  z: "m",
  " ": " ",
};

let dict2 = {
  p: "a",
  y: "b",
  a: "c",
  b: "d",
  s: "e",
  o: "f",
  i: "g",
  v: "h",
  q: "i",
  r: "j",
  z: "k",
  h: "l",
  t: "m",
  c: "n",
  j: "o",
  e: "p",
  g: "q",
  x: "r",
  n: "s",
  f: "t",
  l: "u",
  d: "v",
  u: "w",
  w: "x",
  m: "z",
  k: "y",
  " ": " ",
};
function chars(string) {
  return Array.from(String(string));
}
function encrypt() {
  if (x.value == "") {
    alert("enter some text");
  }
  let output_string = "";
  bruh = chars(x.value);
  for (let i = 0, size = bruh.length; i < size; i++) {
    if (dict[bruh[i]] != undefined) {
      bruh[i] = dict[bruh[i]];
      output_string += bruh[i];
    } else {
      output_string += bruh[i];
    }
  }

  console.log(output_string);
  y.value = output_string;
  navigator.clipboard.writeText(output_string);
}

function decrypt() {
  let output_string = "";
  bruh = chars(x.value);
  for (let i = 0, size = bruh.length; i < size; i++) {
    if (dict2[bruh[i]] != undefined) {
      bruh[i] = dict2[bruh[i]];
      output_string += bruh[i];
    } else {
      output_string += bruh[i];
    }
  }
  y.value = output_string;
  console.log(output_string);
  navigator.clipboard.writeText(output_string);
}
