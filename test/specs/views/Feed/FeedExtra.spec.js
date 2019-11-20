import { shallow } from '@vue/test-utils';
import FeedExtra from 'semantic-ui-vue/views/Feed/FeedExtra';

describe('FeedExtra', () => {
  it('should create a SUI FeedExtra', () => {
    const extra = shallow(FeedExtra);
    expect(extra.is('div')).toEqual(true);
    expect(extra.classes()).toContain('extra');
    expect(extra.text()).toEqual('');
  });

  it('should create a SUI FeedExtra with content', () => {
    const extra = shallow(FeedExtra, { propsData: { content: 'More text here' } });
    expect(extra.is('div')).toEqual(true);
    expect(extra.classes()).toContain('extra');
    expect(extra.classes()).toContain('text');
    expect(extra.text()).toEqual('More text here');
  });

  it('should create a SUI FeedExtra with images class', () => {
    const extra = shallow(FeedExtra, { propsData: { images: true } });
    expect(extra.is('div')).toEqual(true);
    expect(extra.classes()).toContain('extra');
    expect(extra.classes()).toContain('images');
    expect(extra.contains('img')).toEqual(false);
  });

  it('should create a SUI FeedExtra with images', () => {
    const extra = shallow(FeedExtra, { propsData: { images: [
      '/image0.png',
      '/image1.png',
    ] } });
    expect(extra.is('div')).toEqual(true);
    expect(extra.classes()).toContain('extra');
    expect(extra.classes()).toContain('images');
    expect(extra.contains('img')).toEqual(true);
    const divs = extra.findAll('img');
    expect(divs.length).toEqual(2);
    expect(divs.at(0).attributes().src).toEqual('/image0.png');
    expect(divs.at(1).attributes().src).toEqual('/image1.png');
  });

  it('should only render default slot if both props and default slot exist', () => {
    const extra = shallow(FeedExtra, {
      propsData: {
        images: [
          '/image0.png',
          '/image1.png',
        ],
      },
      slots: {
        default: '<span>Only render this</span>',
      },
    });
    expect(extra.is('div')).toEqual(true);
    expect(extra.classes()).toContain('extra');
    expect(extra.text()).toEqual('Only render this');
  });

  it('should create a SUI FeedExtra with default slot', () => {
    const extra = shallow(FeedExtra, { slots: { default: '<span>More text here</span>' } });
    expect(extra.is('div')).toEqual(true);
    expect(extra.classes()).toContain('extra');
    expect(extra.text()).toEqual('More text here');
  });
});
