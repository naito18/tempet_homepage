// src/components/Card.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    image: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Beautiful Sunset',
    description: 'Enjoy a stunning sunset view from the hills.',
    image: 'https://source.unsplash.com/300x150/?sunset,nature',
  },
};

export const NoImage: Story = {
  args: {
    title: 'Just Text',
    description: 'This card has no image, just text content.',
  },
};
