このファイルは、Next.jsアプリケーションのミドルウェアとして機能するためのものです。以下に、このファイルの各部分について説明します。

```javascript
import { NextResponse } from "next/server"
import acceptLanguage from "accept-language"
import { fallbackLng, languages, cookieName } from "./app/i18n/settings"

acceptLanguage.languages(languages)

export const config = {
  // matcher: '/:lng*'
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
}
```

- 1行目から3行目は、Next.jsの`NextResponse`と`accept-language`パッケージをインポートしています。`NextResponse`は、サーバーサイドでのレスポンスを表すオブジェクトであり、`accept-language`は、ブラウザの言語設定を解析するためのパッケージです。

- 5行目から7行目は、i18nの設定をインポートしています。

`fallbackLng`は、言語がサポートされていない場合に使用される言語を表します。

`languages`は、サポートされている言語のリストを表します。

`cookieName`は、言語を保存するためのクッキーの名前を表します。

- 9行目は、`accept-language`パッケージにサポートされている言語を設定しています。

- 11行目から14行目は、`config`オブジェクトを定義しています。

`matcher`プロパティは、このミドルウェアが適用されるURLパターンを表します。

この場合、`/api`、`/_next/static`、`/_next/image`、`/assets`、`/favicon.ico`、`/sw.js`以外のすべてのURLに適用されます。





```javascript
export function middleware(req) {
  let lng
  if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName).value)
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"))
  if (!lng) lng = fallbackLng

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
  }

```

- 16行目から33行目は、`middleware`関数を定義しています。この関数は、リクエストを受け取り、レスポンスを返します。
- 17行目で、`lng`変数を宣言しています。これは、言語を表します。

- 18行目から20行目は、クッキーから言語を取得し、取得できない場合はブラウザの言語設定から言語を取得し、それでも取得できない場合は`fallbackLng`を使用します。

- 23行目から28行目は、言語がサポートされていない場合にリダイレクトするためのコードです。`languages`リストに含まれていない言語がURLに含まれている場合、または`/_next`で始まるURLの場合、`/${lng}`をURLの先頭に追加してリダイレクトします。



```javascript

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer"))
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}

```

- 30行目から33行目は、リファラーから言語を取得し、クッキーに保存するためのコードです。リファラーURLに含まれる言語が`languages`リストに含まれている場合、その言語をクッキーに保存します。
- 35行目は、`NextResponse.next()`を返しています。これは、次のミドルウェアにリクエストを渡すためのものです。
