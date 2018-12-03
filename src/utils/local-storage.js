export const loadState = () => {
  try {
    let localState = localStorage.getItem('localState');
    if (localState === null) {
      return undefined;
    }
    return JSON.parse(localState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    localStorage.setItem('localState', JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};
