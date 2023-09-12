import Link from "next/link";
import { Footer } from "./components/Footer";
import { useTranslation } from "../i18n";

export default async function Page({ params: { lng } }) {
  console.log("lng", lng);

  const { t } = await useTranslation(lng);
  return (
    <>
      {/* <h1>Hi there!</h1> */}
      <h1>{t("title")}</h1>
      <Link href={`/${lng}/second-page`}>
        {/* second page */}
        {t("to-second-page")}
      </Link>
      <br />
      <Link href={`/${lng}/client-page`}>{t("to-client-page")}</Link>
      <br />
      <Link href="/">トップページ</Link>
      <br />
      <Footer lng={lng} />
    </>
  );
}
