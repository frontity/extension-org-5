import ValentiReview from '../../components/ValentiReview';

export default {
  test: ({ component, props, ignore }) =>
    component === 'div' &&
    !!props.className &&
    props.className.includes('cb-review-box') &&
    !ignore,
  process: element => {
    const scores = [];

    const assingScoreClasses = e => {
      if (
        e.props &&
        e.props.className &&
        e.props.className.includes('cb-overlay')
      ) {
        const { content } = e.parent.children.find(
          child =>
            child.props &&
            child.props.className &&
            child.props.className.includes('cb-criteria-score'),
        ).children[0];
        const score = parseInt(content, 10);
        e.props.className = e.props.className.concat(` score${score}`);

        if (!scores.includes(score)) scores.push(score);
      } else if (e.children) {
        e.children.forEach(assingScoreClasses);
      }
    };

    assingScoreClasses(element);

    return {
      ...element,
      component: ValentiReview,
      props: {
        scores,
      },
    };
  },
};
