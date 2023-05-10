const deleteLastCharacter = (str: string) => {
  const spacedCharacter = '&nbsp;';
  const list = str.split('');

  let deleteCount = 1;
  if (/&nbsp;$/.test(str)) {
    deleteCount = spacedCharacter.length;
  }

  list.splice(list.length - (deleteCount > 1 ? deleteCount : 1), deleteCount + 1);
  str.slice(0, list.length - 2);
  return list.join('');
};

export default deleteLastCharacter;
