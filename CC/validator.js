function validator(cc) {
  var amEx = new RegExp(/^(34|37)[0-9]{13}/);
  var visa = new RegExp(/^4([0-9]{12}|[0-9]{13}|[0-9]{14}|[0-9]{15})/);
  var mc = new RegExp(/^5[1-5]([0-9]{14}|[0-9]{15}|[0-9]{16}|[0-9]{17})/);
  var disc = new RegExp(/^(6011|622126-622925|644|645|646| 647|648|649|65)[0-9]+/);


  var num = cc.toString();

  if(num.match(amEx)) {
    console.log("Valid AmEx Card");
  } else if(num.match(visa)) {
    console.log("Valid Visa Card")
  } else if(num.match(mc)) {
    console.log("Valid MasterCard Card");
  } else if(num.match(disc) && num.length === 16) {
    console.log("Valid Discover Card");
  } else {
    console.log("Invalid Card");
  }
}
var cards = [4985924810685901,
4556160200960120,
4485619002701947,
5537813110936165,
5447914559459039,
5343149183441161,
6011536472841003,
6011725417820848,
6011646725041630,
348423593498319,
349785249650538,
379026761706074,
123123,
34634634646434,
23423523535235
];

cards.forEach(function(elem) {
  validator(elem);
});
