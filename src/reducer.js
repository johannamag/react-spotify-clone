export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  //token:
  //"BQBn3BnBTB7ycWm9jd3jJtIiVXKrb1NOH7FB20fuD_a6hwyq5bsG3YRt03kkwrTK2nqprj_xSgYwNrNscQT4rYi95h8g-cVfQVphJ9K5QrzpUIeO02alOpUoCeu2ngu6gkwa10CVfn0u4zGmp5L9SlQ_1vJFEM5Kww",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
