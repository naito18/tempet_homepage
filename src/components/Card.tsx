// src/components/Card.tsx
import { css, cva } from '../../styled-system/css'

type CardProps = {
  title: string;
  description: string;
  image?: string;
};

export const Card = ({ title, description, image }: CardProps) => {
  return (
    <div
      className={css({
        borderRadius: 'xl',
        boxShadow: 'md',
        padding: '6',
        transition: 'all 0.2s ease-in-out',
        _hover: {
          boxShadow: 'xl',
          transform: 'scale(1.02)',
        },
        backgroundColor: 'white',
        maxWidth: '300px',
      })}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className={css({
            borderRadius: 'lg',
            marginBottom: '4',
            objectFit: 'cover',
            width: '100%',
            height: '150px',
          })}
        />
      )}
      <h2 className={css({ fontSize: 'xl', fontWeight: 'bold', marginBottom: '2' })}>
        {title}
      </h2>
      <p className={css({ color: 'gray.600', fontSize: 'sm' })}>{description}</p>
    </div>
  );
};
