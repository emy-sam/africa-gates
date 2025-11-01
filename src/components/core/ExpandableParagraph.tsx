'use client';

import { useState, ReactElement, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type ExpandableParagraphProps = {
  text: string;
  children: ReactElement; // must be <p>
  maxChars?: number;
};

const ExpandableParagraph = ({
  text,
  children,
  maxChars = 150,
}: ExpandableParagraphProps) => {
  const [expanded, setExpanded] = useState(true);
  const { t } = useTranslation('common');
  // is needed to prevent hydration mismatch
  useEffect(() => {
    setExpanded(false);
  }, []);
  return (
    <div>
      {!expanded ? (
        <p className="mt-2 text-gray-700">{text.slice(0, maxChars)}</p>
      ) : (
        children
      )}

      {/* Bouton Afficher plus / moins */}
      <button
        className="mt-4 rounded-3xl border border-black px-4 py-2 font-semibold text-black transition hover:bg-gray-200"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? t('showLess') + ' ▲' : t('showMore') + ' ▼'}
      </button>
    </div>
  );
};

export default ExpandableParagraph;
