export const closeCatalogSections = (event: MouseEvent | React.MouseEvent, handleClickReturnBack: () => void) => {
  if (!(event.target as HTMLFormElement).closest('.catalog')) {
    handleClickReturnBack();
  }
};
