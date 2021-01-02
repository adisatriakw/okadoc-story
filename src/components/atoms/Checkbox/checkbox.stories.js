import React from 'react';
import CheckBox from './checkbox';

export default {
  title: 'Design System/Atom/CheckBox',
  component: CheckBox,
};

const Template = (args) => <CheckBox {...args} />;

export const Fill = Template.bind({});

Fill.args = {
  variant: 'primary',
  size: 'md'
};