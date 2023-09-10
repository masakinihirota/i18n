import Link from "next/link"
import { Footer } from "../components/Footer"
import { useTranslation } from "../../i18n"

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "second-page")

  return (
    <>
      {/* <h1>Hi from second page!</h1> */}
      <h1>{t("title")}</h1>
      <Link href={`/${lng}`}>
        {/* back */}
        {t("back-to-home")}
      </Link>
      <br />
      <Link href="/">トップ</Link>
      <br />
      <Footer lng={lng} />
    </>
  )
}
