describe("Maths", function() {

  it("should be able to add numbers", function() {
    expect(2 + 2).toEqual(4);
  });

  describe("subtraction", function() {

    it("should be able to subtract small numbers from big numbers", function() {
      
      expect(10 - 2).toEqual(8);
      expect(100 - 90).toEqual(10);
    });
    
    
    it("should be able to subtract big numbers from small numbers", function() {
      
      expect(2 - 10).toEqual(-8);
      expect(90 - 100).toEqual(-10);
      
      //expect(100 - 1).toEqual(80);
    });
    
  });
});
