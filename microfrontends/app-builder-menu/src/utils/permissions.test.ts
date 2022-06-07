import { hasAccess } from './permissions';

describe('verify hasAccess function correctness', () => {
  it('should return true when user has required permission', () => {
    const userPermissions = ['superuser', 'enterBackend', 'managePages'];
    const requiredPermissions = ['superuser', 'enterBackend'];
    expect(hasAccess(requiredPermissions, userPermissions)).toBe(true);
  });

  it('should return false when user does not have required permission', () => {
    const userPermissions = ['enterBackend', 'managePages'];
    const requiredPermissions = ['superuser'];
    expect(hasAccess(requiredPermissions, userPermissions)).toBe(false);
  });

  it('should return false when user does not have any permissions', () => {
    const userPermissions: string[] = [];
    const requiredPermissions = [
      'superuser',
      'enterBackend',
      'manageCategories'
    ];
    expect(hasAccess(requiredPermissions, userPermissions)).toBe(false);
  });

  it('should return true if there are no required permissions and no user permissions', () => {
    const userPermissions: string[] = [];
    const requiredPermissions: string[] = [];
    expect(hasAccess(requiredPermissions, userPermissions)).toBe(false);
  });

  it('should return false if there are no required permissions and there are some user permissions', () => {
    const userPermissions: string[] = [
      'superuser',
      'enterBackend',
      'managePages'
    ];
    const requiredPermissions: string[] = [];
    expect(hasAccess(requiredPermissions, userPermissions)).toBe(false);
  });
});
