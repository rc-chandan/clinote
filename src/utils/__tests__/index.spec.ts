import { checkOSSupport } from '../';

describe('Supported OS types should be linux, macos and windows only', () => {
  
  test('app should support Darwin', () => {
    expect(checkOSSupport('Darwin')).toBe(true);
  });

  test('app should support Linux', () => {
    expect(checkOSSupport('Linux')).toBe(true);
  });

  test('app should support Windows_NT', () => {
    expect(checkOSSupport('Windows_NT')).toBe(true);
  });

  test('clinote should throw error for unknown os type', () => {
    try {
      expect(checkOSSupport('windows_mobile')).toThrow();
    } catch (error) {
      expect(error).toMatchSnapshot();
    }
  });

});
