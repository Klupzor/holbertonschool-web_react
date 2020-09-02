import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils', () => {
  test('getFullYear', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
  });

  test('getFooterCopy', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('getFooterCopy', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  test('getLatestNotification', () => {
    expect(getLatestNotification()).toBe(
      '<strong>Urgent requirement</strong> - complete by EOD'
    );
  });
});
