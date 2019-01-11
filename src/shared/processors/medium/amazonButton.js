import AmazonButton from '../../components/AmazonButton';

export default {
  test: ({ component, props, ignore }) =>
    component === 'div' &&
    !!props.className &&
    props.className.includes('gaz_amz_btn_block') &&
    !ignore,
  process: element => {
    const addIgnoreToChildren = e => {
      e.ignore = true;

      if (e.children) {
        e.children.forEach(child => {
          addIgnoreToChildren(child);
        });
      }
    };

    addIgnoreToChildren(element);

    return {
      ...element,
      component: AmazonButton,
    };
  },
};
