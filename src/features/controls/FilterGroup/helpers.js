export const optionsFilter = (content, filter) => {
  const data = content?.map((item) => item[filter])
  return [...new Set(data)]
}

export const nameButton = (name) => {
  if (name === 'author') return 'исполнителю'
  if (name === 'genre') return 'жанру'
  if (name === 'year') return 'году выпуска'
}
