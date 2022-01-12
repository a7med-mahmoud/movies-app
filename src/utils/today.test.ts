import today from './today';

describe('today util', () => {
  it('returns day start', () => {
    const date = today();

    expect(date.getHours()).toBe(0);
    expect(date.getMinutes()).toBe(0);
    expect(date.getSeconds()).toBe(0);
    expect(date.getMilliseconds()).toBe(0);
  });

  it('returns current day', () => {
    const current = new Date();
    const date = today();

    expect(date.toDateString()).toBe(current.toDateString());
  });
});
