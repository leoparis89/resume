import React from 'react'
import { NodeLocale, useLang } from './contexts/IntlContext'

const translations = {
  OVERVIEW: {
    [NodeLocale.FR]: 'à propos',
    [NodeLocale.EN]: 'overview',
  },
  WORK: {
    [NodeLocale.FR]: 'Expériences professionelles',
    [NodeLocale.EN]: 'Professional history',
  },
  CURRENT: {
    [NodeLocale.FR]: 'Actuel',
    [NodeLocale.EN]: 'Current',
  },
  BACK: {
    [NodeLocale.FR]: 'Retour',
    [NodeLocale.EN]: 'Go back',
  },
}

export const Translate: React.FC<{ phrase: string }> = ({ phrase }) => {
  const lang = useLang()

  return <>{translations[phrase][lang]}</>
}
