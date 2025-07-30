'use client';

import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { use } from 'react';

import LinkWithArrow from '#site/components/LinkWithArrow';
import { ReleaseModalContext } from '#site/providers/releaseModalProvider';
import type { NodeRelease } from '#site/types';

type DetailsButtonProps = {
  versionData: NodeRelease;
};

const DetailsButton: FC<DetailsButtonProps> = ({ versionData }) => {
  const t = useTranslations('components.downloadReleasesTable');

  const { openModal } = use(ReleaseModalContext);

  return (
    <LinkWithArrow
      className="cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label={t('details')}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(versionData);
        }
      }}
      onClick={() => openModal(versionData)}
    >
      {t('details')}
    </LinkWithArrow>
  );
};

export default DetailsButton;
