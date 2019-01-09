import AmazonButton from '../../components/AmazonButton';

const addIgnoreToChildren = element => {
  element.ignore = true;

  if (!element.children) return element;

  return {
    ...element,
    children: element.children.map(addIgnoreToChildren),
  };
};

export default {
  test: ({ component, props, ignore }) =>
    component === 'div' &&
    !!props.className &&
    props.className.includes('gaz_amz_btn_block') &&
    !ignore,
  process: element => {
    const ignoredElement = addIgnoreToChildren(element);

    return {
      ...ignoredElement,
      component: AmazonButton,
    };
  },
};
