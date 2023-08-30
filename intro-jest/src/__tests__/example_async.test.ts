//callbacks

const asyncCallback = (cb:(call:boolean)=>void)=>{
    setTimeout(() => {
     cb(true);   
    },5);
}

// promises
const asyncPromise = ()=>{
    return new Promise((resolve)=>{
        return resolve(true)
    })
}

describe("async code",()=>{
    test('example of async with callback', (done) => { 
       asyncCallback((result)=>{
        expect(result).toBe(true)
        done()
        })
     })

     test("example of async with promises",()=>{
        return asyncPromise().then((result)=>{
            expect(result).toBe(true)
        })
     })

     
     test("example of async with promises resolves",()=>{
        return expect(asyncPromise()).resolves.toBe(true)
     })

     test("example of async with promises async/await",async()=>{
        const result = await asyncPromise()
        expect(result).toBe(true)
     })
})