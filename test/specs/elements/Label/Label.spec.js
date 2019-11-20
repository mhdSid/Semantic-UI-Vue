import { shallow } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Label from 'semantic-ui-vue/elements/Label/Label';

describe('Label', () => {
  testClassFromProps(Label, ['ui', 'label']);

  it('should create a SUI Label', () => {
    const label = shallow(Label);
    expect(label.is('div')).toEqual(true);
    expect(label.classes()).toContain('ui');
    expect(label.classes()).toContain('label');
  });

  it('should create a SUI Label with image', () => {
    const label = shallow(Label, { propsData: { image: true } });
    expect(label.is('div')).toEqual(true);
    expect(label.classes()).toContain('ui');
    expect(label.classes()).toContain('label');
    expect(label.classes()).toContain('image');
  });

  it('should create a SUI Label with icon', () => {
    const label = shallow(Label, { propsData: { icon: 'settings' } });
    expect(label.is('div')).toEqual(true);
    expect(label.classes()).toContain('ui');
    expect(label.classes()).toContain('label');
    expect(!!label.find('.icon.settings')).toEqual(true);
  });

  it('should create a SUI colored Label ', () => {
    const label = shallow(Label, { propsData: { color: 'red' } });
    expect(label.is('div')).toEqual(true);
    expect(label.classes()).toContain('ui');
    expect(label.classes()).toContain('label');
    expect(label.classes()).toContain('red');
  });
});
