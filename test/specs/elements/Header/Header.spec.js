import { shallow } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Header from 'semantic-ui-vue/elements/Header/Header';

describe('Header', () => {
  testClassFromProps(Header, [
    'ui', 'header',
  ]);

  it('should create a SUI Header', () => {
    const header = shallow(Header);
    expect(header.is('div')).toEqual(true);
    expect(header.classes()).toContain('ui');
    expect(header.classes()).toContain('header');
  });

  it('should have a color', () => {
    const header = shallow(Header, { propsData: { color: 'red' } });
    expect(header.classes()).toContain('red');
  });

  it('should have a size', () => {
    const header = shallow(Header, { propsData: { size: '12' } });
    expect(header.classes()).toContain('12');
  });

  it('should have a floated class', () => {
    const header = shallow(Header, { propsData: { floated: 'left' } });
    expect(header.classes()).toContain('floated');
    expect(header.classes()).toContain('left');
  });

  it('should have an image class', () => {
    const header = shallow(Header, { propsData: { image: true } });
    expect(header.classes()).toContain('image');
  });

  it('should have a sub class', () => {
    const header = shallow(Header, { propsData: { sub: true } });
    expect(header.classes()).toContain('sub');
  });

  it('should have content', () => {
    const header1 = shallow(Header, { propsData: { content: 'Content String' } });
    expect(header1.text()).toEqual('Content String');

    const header2 = shallow(Header, { slots: { default: '<span>Content String</span>' } });
    expect(header2.text()).toEqual('Content String');
  });

  it('should have an icon class', () => {
    const header = shallow(Header, { propsData: { icon: 'settings' } });
    expect(header.classes()).toContain('icon');
    expect(!!header.find('.icon.settings')).toEqual(true);
  });
});
