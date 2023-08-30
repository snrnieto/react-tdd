describe('matchers', () => {
  // ===
    test('toBe', () => {
      expect(true).toBe(true);
    });
  // ==
    test('toEqual', () => {
      const data:any = {one: 1};
      data['two'] = 2;
      expect(data).toEqual({one: 1, two: 2});
  
      const arr = ['one'];
      arr.push('two')
      expect(arr).toEqual(['one', 'two']);
    });

    test("not",()=>{
      expect(true).not.toBe(false)
    })

    test("string",()=>{
      expect("team").not.toMatch(/I/)
      expect("team").toMatch(/m/)
    })

    test('thown error', () => { 
      expect(()=>{throw Error}).toThrow()
    })

})