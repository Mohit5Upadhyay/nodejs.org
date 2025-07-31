'use client';

import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { use } from 'react';

import { ReleaseModalContext } from '#site/providers/releaseModalProvider';
import type { NodeRelease } from '#site/types';

type DetailsButtonProps = {
  versionData: NodeRelease;
};

const DetailsButton: FC<DetailsButtonProps> = ({ versionData }) => {
  const t = useTranslations('components.downloadReleasesTable');

  const { openModal } = use(ReleaseModalContext);

  return (
    <button
      type="button"
      className="cursor-pointer text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-200"
      onClick={() => openModal(versionData)}
      aria-label={t('details')}
    >
      {t('details')}
      <ArrowUpRightIcon className="ml-1 inline w-3 fill-neutral-600 dark:fill-white" />
    </button>
  );
};

export default DetailsButton;
