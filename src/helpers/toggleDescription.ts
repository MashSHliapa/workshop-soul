export function toggleDescription(prev: boolean[], id: number) {
  if (prev[id]) {
    return { ...prev, [id]: false };
  } else {
    const newPrev = { ...prev };
    Object.keys(prev).forEach((key) => {
      if (key !== String(id)) {
        delete newPrev[Number(key)];
      }
    });
    newPrev[id] = true;
    return newPrev;
  }
}
