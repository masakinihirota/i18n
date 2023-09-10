// 非同期バージョン
// import { useTranslation } from "../../../i18n"
// import { FooterBase } from "./FooterBase"

// export const Footer = async ({ lng }) => {
//   const { t } = await useTranslation(lng, "footer")
//   return <FooterBase t={t} lng={lng} />
// }

// クライアントバージョン
"use client"

import { FooterBase } from "./FooterBase"
import { useTranslation } from "../../../i18n/client"

export const Footer = ({ lng }) => {
  const { t } = useTranslation(lng, "footer")
  return <FooterBase t={t} lng={lng} />
}
