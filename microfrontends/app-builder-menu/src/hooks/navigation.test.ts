import { useNavigation } from './navigation';

describe('useNavigation', () => {
  it('should return a function with correct argument', () => {
    window.entando = {
      ...window.entando,
      router: {
        push: jest.fn(),
        listen: jest.fn(),
        replace: jest.fn()
      }
    };
    const navigate = useNavigation();
    expect(navigate).toBeInstanceOf(Function);
    const path = '/new-path';
    navigate(path);
    expect(window.entando.router.push).toHaveBeenCalledWith(path);
  });
});
