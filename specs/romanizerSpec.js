// Here is where you write your tests.

// Take any number and turn it Roman Numeral
describe('Romanizer', function(){
  it('converts 0', function(){
    expect(Romanizer.convert(0)).toEqual("");
  });
  it('converts 1', function(){
    expect(Romanizer.convert(1)).toEqual("I");
  });
  it('converts 2', function(){
    expect(Romanizer.convert(2)).toEqual("II");
  });
  it('converts 3', function(){
    expect(Romanizer.convert(3)).toEqual("III");
  });
  it('converts 4', function(){
    expect(Romanizer.convert(4)).toEqual("IV");
  });
  it('converts 5', function(){
    expect(Romanizer.convert(5)).toEqual("V");
  });
  it('converts 6', function(){
    expect(Romanizer.convert(6)).toEqual("VI");
  });
  it('converts 7', function(){
    expect(Romanizer.convert(7)).toEqual("VII");
  });
  it('converts 8', function(){
    expect(Romanizer.convert(8)).toEqual("VIII");
  });
  it('converts 9', function(){
    expect(Romanizer.convert(9)).toEqual("IX");
  });
  it('converts 10', function(){
    expect(Romanizer.convert(10)).toEqual("X");
  });
  it('converts 15', function(){
    expect(Romanizer.convert(15)).toEqual("XV");
  });
  it('converts 22', function(){
    expect(Romanizer.convert(22)).toEqual("XXII");
  });
  it('converts 432', function(){
    expect(Romanizer.convert(432)).toEqual("CDXXXII");
  });
});
