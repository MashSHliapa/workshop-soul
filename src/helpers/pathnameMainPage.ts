export function pathnameMainPage(location: { pathname: string }): boolean {
  const { pathname } = location
  const routeMainPage = /^\/selected\/\d+$/.test(pathname)
  return routeMainPage
}
