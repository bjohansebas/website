import { routes, ui } from "./ui";

export const defaultLang = "en";
export const showDefaultLang = false;

type UI = typeof ui;
type Fn = (...args: any[]) => any;
export type LConfP = Record<string, string | ((props: never) => string)>;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations<L extends keyof UI>(lang: L) {
  // chosen ui lang
  const cui = ui[lang];
  const dui = ui[defaultLang];

  // valid prop key
  type VPK = keyof typeof cui | keyof typeof dui;

  // Lazy
  type GetFnKeys<T extends LConfP> = {
    [Up in keyof T]: Up extends keyof T
      ? T[Up] extends Fn
        ? Up
        : never
      : never;
  }[keyof T];

  // @ts-ignore
  function t<K extends GetFnKeys<typeof dui>>(
    key: K,
    vars: K extends string ? Parameters<(typeof dui)[K]>[0] : never,
  ): string;
  function t<K extends GetFnKeys<typeof cui>>(
    key: K,
    vars: K extends string
      ? Parameters<Extract<(typeof cui)[K], Fn>>[0]
      : never,
  ): string;
  function t(
    key: Exclude<VPK, GetFnKeys<typeof cui> | GetFnKeys<typeof dui>>,
  ): string;
  function t(key: VPK, vars?: never): string {
    const translation =
      key in cui
        ? cui[key as VPK & keyof typeof cui]
        : dui[key as VPK & keyof typeof dui];

    if (typeof translation === `function`) {
      // typescript restriction
      return (translation as Extract<typeof translation, Fn>)(vars as never);
    }

    // typescript restriction
    return translation as string;
  }

  return t;
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const pathName = path.replaceAll("/", "");
    const hasTranslation =
      defaultLang !== l &&
      (routes[l as keyof typeof routes] as Record<string, string>)[pathName] !==
        undefined;
    const translatedPath = hasTranslation
      ? "/" +
        (routes[l as keyof typeof routes] as Record<string, string>)[pathName]
      : path;

    return !showDefaultLang && l === defaultLang
      ? translatedPath
      : `/${l}${translatedPath}`;
  };
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split("/");
  const path = parts.pop() || parts.pop();

  if (path === undefined) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0];
    return route[path as keyof typeof route] !== undefined
      ? route[path as keyof typeof route]
      : undefined;
  }

  const getKeyByValue = (
    obj: Record<string, string>,
    value: string,
  ): string | undefined => {
    return Object.keys(obj).find((key) => obj[key] === value);
  };

  const reversedKey = getKeyByValue(routes[currentLang], path);

  if (reversedKey !== undefined) {
    return reversedKey;
  }

  return undefined;
}
