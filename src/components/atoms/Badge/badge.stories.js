import React from 'react';
import Badge from './badge';

export default {
  title: 'Design System/Atom/Badge',
  component: Badge,
};

const Template = (args) => <Badge {...args}>Paid</Badge>;

export const Fill = Template.bind({});

Fill.args = {
  variant: 'primary',
  size: 'sm'
};