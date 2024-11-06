export function catalogSectionsScroll(stateOfSection: boolean | null, section: string) {
  if (stateOfSection) {
    const element = document.getElementById(section);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    }
  }
}
