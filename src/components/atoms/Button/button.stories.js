import React from 'react';
import Button from './button';

export default {
  title: 'Design System/Atom/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Lorem ipsum dolor sit amet',
  },
};

export const Fill = args => (
  <Button {...args}>Call to Book</Button>
)

Fill.args = {
  variant: 'primary',
  size: 'md'
};

export const Variant = args => (
  <div className="space-x-4">
    <Button {...args} variant="primary">Call to Book</Button>
    <Button {...args} variant="secondary">Call to Book</Button>
    <Button {...args} variant="danger">Call to Book</Button>
    <Button {...args} variant="outlinePrimary">Call to Book</Button>
    <Button {...args} variant="outlineSecondary">Call to Book</Button>
    <Button {...args} variant="outlineMixedSecondary">Call to Book</Button>
    <Button {...args} variant="outlineMixedDanger">Call to Book</Button>
  </div>
)

Variant.args = {
  variant: 'outlineDanger',
  size: 'md'
}

export const Sizes = args => (
  <div className="space-x-4">
    <Button {...args} size="sm">Call to Book</Button>
    <Button {...args} size="md">Call to Book</Button>
    <Button {...args} size="lg">Call to Book</Button>
  </div>
)

Sizes.args = {
  variant: 'primary',
}