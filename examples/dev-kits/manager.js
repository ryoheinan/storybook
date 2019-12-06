import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from '@storybook/react/demo';
import { addons } from '@storybook/addons';
import { useAddonState } from '@storybook/api';
import { themes } from '@storybook/theming';
import { AddonPanel } from '@storybook/components';

addons.setConfig({
  theme: themes.dark,
  panelPosition: 'bottom',
  selectedPanel: 'storybook/roundtrip',
});

const StatePanel = ({ active, key }) => {
  const [state, setState] = useAddonState('test', 10);
  return (
    <AddonPanel key={key} active={active}>
      Manager counter: {state}
      <br />
      <Button onClick={() => setState(state - 1)}>decrement</Button>
      <Button onClick={() => setState(state + 1)}>increment</Button>
    </AddonPanel>
  );
};

StatePanel.propTypes = {
  active: PropTypes.bool.isRequired,
  key: PropTypes.string.isRequired,
};

addons.addPanel('useAddonState', {
  id: 'useAddonState',
  title: 'useAddonState',
  render: StatePanel,
});
