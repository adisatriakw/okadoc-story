import React from 'react';
import Radio from './radio';

export default {
  title: 'Design System/Atom/Radio',
  component: Radio,
};

const Template = (args) => <Radio {...args} />;

export const Fill = Template.bind({});

Fill.args = {
  variant: 'primary',
  size: 'md'
};