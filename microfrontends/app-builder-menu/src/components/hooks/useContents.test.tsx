import { useContent } from './useContent';
import { renderHook } from '@testing-library/react';

describe('useContent', () => {
  it('must render a correct object', async () => {
    const { result } = renderHook(() => useContent());
    expect(result.current).toBeInstanceOf(Object);
  });
});
