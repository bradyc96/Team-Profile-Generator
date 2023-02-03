const Intern = require('../lib/Intern')

test('Tests if we can set intern information', () => {
    const intern = new Intern('Brady', 7471, 'tcobrady@amazon.com', 'University of Washington')
    expect(intern.name).toBe('Brady');
    expect(intern.id).toBe(7471);
    expect(intern.email).toBe('tcobrady@amazon.com');
    expect(intern.school).toBe('University of Washington')
  });

test('Tests if we can get school', () => {
const intern = new Intern('Brady', 7471, 'tcobrady@amazon.com', 'University of Washington')
expect(intern.getSchool()).toBe('University of Washington');
});


test('Tests if we can get role', () => {
const intern = new Intern('Brady', 7471, 'tcobrady@amazon.com', 'University of Washington')
expect(intern.getRole()).toBe('Intern');
});
