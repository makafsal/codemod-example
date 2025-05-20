'use strict';

const transform = (file, api) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  // 1. Update the import source
  root.find(j.ImportDeclaration, {
      source: { value: 'ui-lib' },
  }).forEach((path) => {
      const hasButton = path.node.specifiers.some(
          (s) => s.type === 'ImportSpecifier' && s.imported.name === 'Button',
      );
      if (hasButton) {
          path.node.source.value = 'ui-core';
      }
  });

  // 2. Update JSX <Button> usage
  root.find(j.JSXElement, {
      openingElement: {
          name: { name: 'Button' },
      },
  }).forEach((path) => {
      const attrs = path.node.openingElement.attributes;

      for (const attr of attrs) {
          // kind="primary" → variant="solid"
          if (
              attr.type === 'JSXAttribute' &&
              attr.name.name === 'kind' &&
              attr.value.value === 'primary'
          ) {
              attr.name.name = 'variant';
              attr.value.value = 'solid';
          }

          // small → size="sm"
          if (
              attr.type === 'JSXAttribute' &&
              attr.name.name === 'small' &&
              attr.value == null
          ) {
              attr.name.name = 'size';
              attr.value = j.literal('sm');
          }
      }
  });

  return root.toSource();
}

export default transform;