import { renderHook, act } from '@testing-library/react';
import { useActiveMenuItem } from './menu';

describe('useActiveMenuItem', () => {
  it('should return the active menu item id based on location and its setter function', () => {
    delete (global.window as Partial<Window>).location;
    global.window.location = { pathname: '/dashboard' } as Location;

    const { result } = renderHook(() => useActiveMenuItem());
    expect(result.current.activeMenuItem).toBe('dashboard');
    
    act(() => {
      result.current.setActiveMenuItem('pages');
    })

    expect(result.current.activeMenuItem).toBe('pages');
  });

  it('should return the default active menu item id when provided', () => {
    const { result } = renderHook(() => useActiveMenuItem('users'));
    expect(result.current.activeMenuItem).toBe('users');
  });

  it('should return updated activeMenuItem when new location is pushed', () => {
    window.entando.router.listen = jest.fn(
      (listener) => {
        listener({ location: { pathname: '/widget' } as Location });
        return () => {};
      }
    );
    const { result } = renderHook(() => useActiveMenuItem());
    expect(result.current.activeMenuItem).toBe('components');
  });
});
