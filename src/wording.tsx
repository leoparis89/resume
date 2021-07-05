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
  EDUCATION: {
    [NodeLocale.FR]: 'Formation',
    [NodeLocale.EN]: 'Education',
  },
  TECH_STACK: {
    [NodeLocale.FR]: 'Stack technique',
    [NodeLocale.EN]: 'Tech stack',
  },
}

type TranslationKey = keyof typeof translations

export const Translate: React.FC<{ phrase: TranslationKey }> = ({ phrase }) => {
  const lang = useLang()

  return <>{translations[phrase][lang]}</>
}
export const useTranslator = () => {
  const lang = useLang()

  return (phrase: TranslationKey) => translations[phrase][lang]
}

export const filterByLang = (lang) => (node) =>
  (node.node_locale as string).includes(lang)
