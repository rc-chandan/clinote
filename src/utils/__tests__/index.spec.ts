import { checkOsSupport } from '../';

describe('Supported OS types should be linux, macos and windows only', () => {
  
  test('app should support Darwin', () => {
    expect(checkOsSupport('Darwin')).toBe(true);
  });

  test('app should support Linux', () => {
    expect(checkOsSupport('Linux')).toBe(true);
  });

  test('app should support Windows_NT', () => {
    expect(checkOsSupport('Windows_NT')).toBe(true);
  });

  test('clinote should throw error for unknown os type', () => {
    try {
      expect(checkOsSupport('windows_mobile')).toThrow();
    } catch (error) {
      expect(error).toMatchSnapshot();
    }
  });

});
