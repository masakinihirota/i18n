import { dir } from "i18next"
import { languages } from "../i18n/settings"

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    // html要素のlang属性は、現在のドキュメントの言語を指定するために使用されます。
    // html要素のdir属性は、現在のドキュメントのテキスト方向を指定するために使用されます。
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>{children}</body>
    </html>
  )
}
