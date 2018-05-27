import Feature from './Feature';

it('fills .title out of .id if not defined', () => {
  let feature = new Feature({ id: 'test feature' });
  expect(feature.title).toEqual('Test feature');

  feature = new Feature({ id: 'test feature', title: 'whatever' });
  expect(feature.title).toEqual('whatever');
});
