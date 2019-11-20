import { shallow } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import List from 'semantic-ui-vue/elements/List/List';

describe('List', () => {
  testClassFromProps(List, ['ui', 'list']);

  it('should create a SUI List', () => {
    const list = shallow(List);

    expect(list.is('div')).toEqual(true);
    expect(list.classes()).toContain('ui');
    expect(list.classes()).toContain('list');
  });

  it('should create a SUI List with inverted style', () => {
    const list = shallow(List, { propsData: { inverted: true } });
    expect(list.classes()).toContain('inverted');
  });
});
