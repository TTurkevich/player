export const shuffleList = (arr) => {
  let j, temp
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
  }
  return arr
}

export const sortById = (tracks, id) => {
  const index = tracks.findIndex((el) => el.id === id)
  return [...tracks.slice(index), ...tracks.slice(0, index)]
}

export const setAllID = (list) => list.map(({ id }) => id)

export const sortYear = (filterYears) => {
  if (filterYears === 'старые')
    return (a, b) => new Date(a.release_date) - new Date(b.release_date)
  if (filterYears === 'новые')
    return (a, b) => new Date(b.release_date) - new Date(a.release_date)
}
