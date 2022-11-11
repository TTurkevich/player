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
  const playlist = [...tracks.slice(index), ...tracks.slice(0, index)]
  return playlist
}

export const setAllID = (list) => {
  const allId = list.map((f) => f.id)
  return allId
}

export const sortYear = (filterYears) => {
  if (filterYears === 'старые') {
    return function (a, b) {
      const c = new Date(a.release_date)
      const d = new Date(b.release_date)
      return c - d
    }
  }
  if (filterYears === 'новые') {
    return function (a, b) {
      const c = new Date(a.release_date)
      const d = new Date(b.release_date)
      return d - c
    }
  }
}
