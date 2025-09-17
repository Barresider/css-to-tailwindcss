const cssFunctionRegexp = /^([\w-]+)\(([\s\S]*)\)$/;

export function parseCSSFunction(string: string) {
  const match = string.match(cssFunctionRegexp);
  return {
    name: (match && match[1]) || null,
    value: (match && match[2]) || null,
  };
}
