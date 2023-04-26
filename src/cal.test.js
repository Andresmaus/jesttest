const cal = require(".");

test('suma', ()=>{
    const result = cal.suma(1,2);
    expect(result).toBe(3);
}
)