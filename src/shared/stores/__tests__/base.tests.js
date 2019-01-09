import { types } from 'mobx-state-tree';
import Base from '../base';

const Store = types.model().props({
  organization: types.optional(Base, {}),
});

describe('Extension Organization 5 › Shared › Stores › Base', () => {
  test('addProcesors should call h2r.addProcessor three times', () => {
    const store = Store.create(
      {},
      {
        organization: {
          processors: {
            low: [1],
            medium: [2],
            high: [3],
          },
        },
      },
    );
    const addProcessor = jest.fn();

    Object.defineProperty(store, 'theme', {
      writable: true,
      value: {
        h2r: {
          addProcessor,
        },
      },
    });

    store.organization.addProcessors();

    expect(addProcessor).toHaveBeenCalledTimes(3);
  });

  test("addProcesors should call h2r.addProcessor with 'medium' priority", () => {
    const processor = { test: () => {}, process: () => {} };
    const store = Store.create(
      {},
      {
        organization: {
          processors: {
            low: [],
            medium: [processor],
            high: [],
          },
        },
      },
    );
    const addProcessor = jest.fn();

    Object.defineProperty(store, 'theme', {
      writable: true,
      value: {
        h2r: {
          addProcessor,
        },
      },
    });

    store.organization.addProcessors();

    expect(addProcessor).toHaveBeenCalledTimes(1);
    expect(addProcessor).toHaveBeenCalledWith(processor, 'medium');
  });
});
