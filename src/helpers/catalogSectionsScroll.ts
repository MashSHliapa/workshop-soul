export function catalogSectionsScroll(stateOfSection: boolean, section: string) {
  if (stateOfSection) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
