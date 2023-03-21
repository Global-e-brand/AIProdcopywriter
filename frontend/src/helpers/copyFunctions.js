export function copyToClipboard(item, i, setCopied) {
  let clipboardData = "";
  i = i + 1;
  clipboardData += item.text.trim();
  navigator.clipboard.writeText(clipboardData);
  setCopied(i);
  const timer = setTimeout(() => {
    setCopied(false);
  }, 2000);
  return () => clearTimeout(timer);
}

export function copyToAllClipboard(data, setAllCopied) {
  let clipboardData = "";
  data.map((item, i) => {
    i = i + 1;
    clipboardData += `Result #` + i + ":\n" + item.text.trim() + `\n\n`;
  });

  // clipboardData.
  navigator.clipboard.writeText(clipboardData.trim());
  setAllCopied(true);
  const timer = setTimeout(() => {
    setAllCopied(false);
  }, 2000);
  return () => clearTimeout(timer);
}
