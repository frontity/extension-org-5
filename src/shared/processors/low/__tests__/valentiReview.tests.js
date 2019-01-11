import valentiReview from '../valentiReview';
import ValentiReview from '../../../components/ValentiReview';
import data from './data/valentiReview.json';
import expectedResult from './data/valentiReviewResult.json';

const { process, test: processorTest } = valentiReview;

describe('Extension Organization 5 › Shared › Processors › low › valentiReview', () => {
  test('Test returns true if the component is `div`, has class `cb-review-box` and ignore is false', () => {
    const result = processorTest({
      component: 'div',
      props: { className: 'cb-review-box' },
    });
    expect(result).toBe(true);
  });

  test('Test returns false if the component is not `div`', () => {
    const result = processorTest({
      component: 'a',
      props: { className: 'cb-review-box' },
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
      props: { className: 'cb-review-box' },
      ignore: true,
    });
    expect(result).toBe(false);
  });

  test('Processor returns an element with the right values', () => {
    const result = process(data);
    expect(result).toEqual({
      ...expectedResult,
      component: ValentiReview,
    });
  });
});
