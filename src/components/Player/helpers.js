export const setTrack = (tracks, trackIndex) => {
  let track
  if (tracks === undefined || tracks.length === 0) {
    track = {
      id: 'error',
      name: 'Не найден',
      author: 'Не найден',
      track_file: 'error',
    }
    return track
  }
  if (tracks.length > 1) {
    track = tracks[trackIndex]
    return track
  }
  if (tracks.length === 1) {
    track = tracks[0]
    return track
  }
  return track
}

export const changeTrackStyling = (duration, trackProgress, theme) => {
  let colorStart, colorStop

  if (theme === 'dark') {
    colorStart = '#AD61FF'
    colorStop = '#2e2e2e'
  } else {
    colorStart = '#AD61FF'
    colorStop = '#d9d9d9'
  }
  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : '0%'

  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, ${colorStart} ), color-stop(${currentPercentage}, ${colorStop} ))
  `
  return trackStyling
}
