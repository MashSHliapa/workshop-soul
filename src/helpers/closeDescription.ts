export function closeDescription(event: MouseEvent | React.MouseEvent, state: (state: boolean[]) => void) {
  if (!(event.target as HTMLElement).closest('.item-card') && !(event.target as HTMLElement).closest('.slick-arrow')) {
    state({} as boolean[])
  } else if ((event.target as HTMLElement).classList.contains('slick-arrow')) {
    setTimeout(() => {
      state({} as boolean[])
    }, 200)
  }
}
