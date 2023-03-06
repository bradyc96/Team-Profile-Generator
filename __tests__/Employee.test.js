const Employee = require('../lib/Employee')


test('Tests if we can set employee information', () => {
    const employee = new Employee('Brady', 7471, 'tcobrady@amazon.com')
    expect(employee.name).toBe('Brady');
    expect(employee.id).toBe(7471);
    expect(employee.email).toBe('tcobrady@amazon.com');
  });

test('Tests if we can get name', () => {
const employee = new Employee('Brady', 7471, 'tcobrady@amazon.com')
expect(employee.getName()).toBe('Brady');
});

test('Tests if we can get id', () => {
const employee = new Employee('Brady', 7471, 'tcobrady@amazon.com')
expect(employee.getId()).toBe(7471);
});


test('Tests if we can get email', () => {
const employee = new Employee('Brady', 7471, 'tcobrady@amazon.com')
expect(employee.getEmail()).toBe('tcobrady@amazon.com');
});

test('Tests if we can get role', () => {
const employee = new Employee('Brady', 7471, 'tcobrady@amazon.com')
expect(employee.getRole()).toBe('Employee');
});


