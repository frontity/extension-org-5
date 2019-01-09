import { types, getParent, getEnv } from 'mobx-state-tree';

export default types
  .model('Organization')
  .views(self => ({
    get root() {
      return getParent(self, 1);
    },
  }))
  .actions(self => ({
    addProcessors() {
      const { h2r } = self.root.theme;
      const { processors } = getEnv(self).organization;

      processors.low.forEach(processor => h2r.addProcessor(processor, 'low'));
      processors.medium.forEach(processor =>
        h2r.addProcessor(processor, 'medium'),
      );
      processors.high.forEach(processor => h2r.addProcessor(processor, 'high'));
    },
  }));
