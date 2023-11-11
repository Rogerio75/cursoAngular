import { categoryPipe } from './categoria.pipe';

describe('CategoriaPipe', () => {
  it('create an instance', () => {
    const pipe = new categoryPipe();
    expect(pipe).toBeTruthy();
  });
});
