export const BASE_URL = 'https://painassasin.online/'

//user //post
export const USER_SIGNUP = 'user/signup/'
export const USER_LOGIN = 'user/login/'
export const USER_TOKEN = 'user/token/'
export const USER_REFRESH_TOKEN = 'user/token/refresh/'

//all tracks //get
export const ALL_TRACKS = 'catalog/track/all/'
export const searchTrackByID = (id) => `catalog/track/${id}/`

//selections //get
export const SELECTION = 'catalog/selection/'
export const SELECTION_BY_ID = (id) => 'catalog/selection/' + id + '/'

//favorite //get //post/delete
export const FAVORITE = 'catalog/track/favorite/all/'
export const searchFavoriteByID = (id) => `catalog/track/${id}/favorite/`
