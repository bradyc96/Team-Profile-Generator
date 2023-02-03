const Manager = require('../lib/Manager')

test('Tests if we can set intern information', () => {
    const manager = new Manager('Brady', 7471, 'tcobrady@amazon.com', 42)
    expect(manager.name).toBe('Brady');
    expect(manager.id).toBe(7471);
    expect(manager.email).toBe('tcobrady@amazon.com');
    expect(manager.officeNumber).toBe(42)
  });


test('Tests if we can get role', () => {
const manager = new Manager('Brady', 7471, 'tcobrady@amazon.com', 42)
expect(manager.getRole()).toBe('Manager');
});
