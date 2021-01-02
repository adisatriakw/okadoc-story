import React from 'react';
import Input from './input';

export default {
  title: 'Design System/Atom/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Fill = Template.bind({});

Fill.args = {
  variant: 'primary',
  size: 'md'
};