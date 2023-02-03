const Engineer = require('../lib/Engineer')

test('Tests if we can set engineer information', () => {
    const engineer = new Engineer('Brady', 7471, 'tcobrady@amazon.com', 'bradyc96')
    expect(engineer.name).toBe('Brady');
    expect(engineer.id).toBe(7471);
    expect(engineer.email).toBe('tcobrady@amazon.com');
    expect(engineer.gitHub).toBe('bradyc96')
  });

  test('Tests if we can get gitHub', () => {
const engineer = new Engineer('Brady', 7471, 'tcobrady@amazon.com', 'bradyc96')
expect(engineer.getGithub()).toBe('bradyc96');
});


test('Tests if we can get id', () => {
const engineer = new Engineer('Brady', 7471, 'tcobrady@amazon.com', 'bradyc96')
expect(engineer.getRole()).toBe('Engineer');
});
