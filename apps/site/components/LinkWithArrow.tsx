import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  PropsWithChildren,
} from 'react';

import Link from '#site/components/Link';

type LinkWithArrowProps =
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | (Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & { href?: never });

const LinkWithArrow: FC<PropsWithChildren<LinkWithArrowProps>> = props => {
  const { children, className, ...rest } = props;

  if ('href' in props && props.href) {
    return (
      <Link
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        className={className}
      >
        <span>
          {children}
          <ArrowUpRightIcon className="ml-1 inline w-3 fill-neutral-600 dark:fill-white" />
        </span>
      </Link>
    );
  }

  return (
    <button
      type="button"
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      className={`${className || ''} text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-200`}
    >
      <span>
        {children}
        <ArrowUpRightIcon className="ml-1 inline w-3 fill-neutral-600 dark:fill-white" />
      </span>
    </button>
  );
};

export default LinkWithArrow;
