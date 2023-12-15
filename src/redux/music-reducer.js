const LIKED = "LIKED"; /// потому что type это string
const DISLIKED = "DISLIKED";
const SET_MUSICS = "SET_MUSICS";

let initialState = {
  musics: [
    {
      id: 1,
      liked: false,
      imgUrl: "https://doramy.club/wp-content/uploads/2018/07/otvet-v-1988.jpg",
      musicDesc: {
        title: "1988",
        author: "OST 1988 Dorama",
      },
    },
    {
      id: 2,
      liked: true,
      imgUrl: "https://doramy.club/wp-content/uploads/2018/07/otvet-v-1988.jpg",
      musicDesc: {
        title: "Belong With Me",
        author: "Taylor Swift",
      },
    },
    {
      id: 3,
      liked: true,
      imgUrl: "https://doramy.club/wp-content/uploads/2018/07/otvet-v-1988.jpg",
      musicDesc: {
        title: "Violet fragrance",
        author: "Wable",
      },
    },
  ],
};

const MusicReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKED:
      return {
        ...state,
        musics: state.musics.map((m) => {
          if (m.id === action.userId) {
            return { ...m, liked: true };
          }
          return m;
        }),
      };
    case DISLIKED:
      return {
        ...state,
        musics: state.musics.map((m) => {
          if (m.id === action.userId) {
            return { ...m, liked: false };
          }
          return m;
        }),
      };
    case SET_MUSICS:
      return { ...state, musics: [...state.musics, ...action.users] };
    default:
      return state;
  }
};

export const likeAC = (userId) => ({ type: LIKED, userId });
export const dislikeAC = (userId) => ({ type: DISLIKED, userId });
export const setMuiscAC = (userId) => ({ type: SET_MUSICS, userId });

export default MusicReducer;
