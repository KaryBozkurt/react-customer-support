import React from 'react';
import { ButtonGroupComponent } from '../components/CommonComponents';

export default {
  title: 'CommonComponents/ButtonGroupComponent',
  component: ButtonGroupComponent,
};

const ButtonGroupComponentTemplate = (args: any) => (
  <ButtonGroupComponent {...args} />
);

export const Default = ButtonGroupComponentTemplate.bind({});

// Default.args = {};
