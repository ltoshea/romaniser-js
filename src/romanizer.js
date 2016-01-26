var Romanizer = {
  arabic: [1000,900,500,400,100,90,50,40,10,9,5,4,1],
  roman:  ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
};

Romanizer.convert = function(number) {

  var result = "";
  var roman = this.roman;
  var arabic = this.arabic;

  arabic.forEach(function(arabicNumber, index){
    while(number >= arabicNumber){
      result += roman[index];
      number -= arabicNumber;
    }
  });
  return result;
};
