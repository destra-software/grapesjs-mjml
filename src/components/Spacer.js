// Specs: https://mjml.io/documentation/#mjml-spacer
import { isComponentType } from './utils';

export const type = 'mj-spacer';

export default (editor, { dc, coreMjmlModel, coreMjmlView }) => {
  dc.addType(type, {
    isComponent: isComponentType(type),

    model: {
      ...coreMjmlModel,
      defaults: {
        name: editor.I18n.t('grapesjs-mjml.components.names.spacer'),
        draggable: '[data-gjs-type=mj-column], [data-gjs-type=mj-hero]',
        droppable: false,
        'style-default': { height: '20px' },
        stylable: ['height', 'container-background-color'],
        void: true,
      },
    },

    view: {
      ...coreMjmlView,
      tagName: 'tr',
      attributes: {
        style: 'pointer-events: all; display: table; width: 100%;user-select: none;',
      },

      getMjmlTemplate() {
        return {
          start: `<mjml><mj-body><mj-column>`,
          end: `</mj-column></mj-body></mjml>`,
        };
      },

      getTemplateFromEl(sandboxEl) {
        return sandboxEl.querySelector('tr').innerHTML;
      },

      getChildrenSelector() {
        return 'td';
      },
    },
  });
};
