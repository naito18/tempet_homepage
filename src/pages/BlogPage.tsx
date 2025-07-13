// src/pages/BlogPage.tsx
import { css } from '../../styled-system/css';
import React from 'react';

interface BlogProps {
  data: {
    title: string;
    image: string;
    content: string;
  };
}

export const BlogPage: React.FC<BlogProps> = ({ data }) => {
  return (
    <div className={css({ maxWidth: '3xl', margin: 'auto', paddingY: '10', paddingX: '6' })}>
      <h1 className={css({ fontSize: '3xl', fontWeight: 'bold', marginBottom: '6', color: 'gray.800' })}>
        {data.title}
      </h1>
      <img
        src={data.image}
        alt={data.title}
        className={css({ width: '100%', borderRadius: 'xl', boxShadow: 'md', marginBottom: '6' })}
      />
      <p className={css({ whiteSpace: 'pre-wrap', color: 'gray.700', lineHeight: '1.9' })}>
        {data.content}
      </p>
    </div>
  );
};
