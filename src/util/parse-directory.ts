export const parseDirectory = (input: string) => {
  input = input.replace(/\\/g, '/')
  if (input.endsWith('/')) {
    return input.substring(0, (input.length - 1))
  }

  return input
}
