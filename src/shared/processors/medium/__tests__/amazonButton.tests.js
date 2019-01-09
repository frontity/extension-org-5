import amazonButton from '../amazonButton';
import AmazonButton from '../../../components/AmazonButton';

const { process, test: processorTest } = amazonButton;

describe('Extension Organization 5 › Shared › Processors › medium › amazonButton', () => {
  test('Test returns true if the component is `div`, has class `gaz_amz_btn_block` and ignore is false', () => {
    const result = processorTest({
      component: 'div',
      props: { className: 'gaz_amz_btn_block' },
    });
    expect(result).toBe(true);
  });

  test('Test returns false if the component is not `div`', () => {
    const result = processorTest({
      component: 'a',
      props: { className: 'gaz_amz_btn_block' },
    });
    expect(result).toBe(false);
  });

  test("Test returns false if the component doesn't have a class", () => {
    const result = processorTest({
      component: 'div',
      props: {},
    });
    expect(result).toBe(false);
  });

  test('Test returns false if the component class is different than `gaz_amz_btn_block`', () => {
    const result = processorTest({
      component: 'div',
      props: { className: 'something' },
    });
    expect(result).toBe(false);
  });

  test('Test returns false if the ignore is true', () => {
    const result = processorTest({
      component: 'div',
      props: { className: 'gaz_amz_btn_block' },
      ignore: true,
    });
    expect(result).toBe(false);
  });

  test('Processor returns an element with the right values and all children ignored', () => {
    const result = process({
      type: 'element',
      component: 'div',
      props: { className: 'gaz_amz_btn_block' },
      children: [
        {
          type: 'element',
          component: 'a',
          props: {},
          children: [
            { type: 'element', component: 'span', props: {} },
            { type: 'element', component: 'span', props: {} },
            { type: 'element', component: 'span', props: {} },
          ],
        },
      ],
    });
    expect(result).toEqual({
      type: 'element',
      component: AmazonButton,
      props: {
        className: 'gaz_amz_btn_block',
      },
      children: [
        {
          type: 'element',
          component: 'a',
          props: {},
          children: [
            { type: 'element', component: 'span', props: {}, ignore: true },
            { type: 'element', component: 'span', props: {}, ignore: true },
            { type: 'element', component: 'span', props: {}, ignore: true },
          ],
          ignore: true,
        },
      ],
      ignore: true,
    });
  });
});
