import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "../Const/actionTypes";
const initialState = {
  movieTab: [
    {
      id: Math.random(),
      title: "Flinch",
      src: "https://best.egybest.film/wp-content/uploads/2021/02/Flinch-1.jpg",
      rating: 2,
      text:
        "A young hit man wrestles with his conscience when he begins to develop feelings for the woman who witnesses a murder he commits.",
    },
    {
      id: Math.random(),
      title: "Monster Hunter",
      src: "https://pbs.twimg.com/media/El3_IO6U4AEvc65.jpg",
      rating: 3,
      text:
        "When Lt. Artemis and her loyal soldiers are transported to a new world, they engage in a desperate battle for survival against enormous enemies with incredible powers.",
    },
    {
      id: Math.random(),
      title: "Expiry",
      src:
        "https://img.yts.mx/assets/images/movies/expiry_2021/medium-cover.jpg",
      rating: "1",
      text:
        "A couple living in a dystopian society that regulates relationships wake up one morning to find they are no longer allowed to touch.",
    },
    {
      id: Math.random(),
      title: "Beauty Is Skin Deep",
      src: "https://i.jeded.com/i/beauty-is-skin-deep.203760.jpg",
      rating: 3,
      text:
        "The small town of Glenwood is rocked by a series of unsolved murders.",
    },
    {
      id: Math.random(),
      title: "Burn It All",
      src:
        "https://i.egycdn.com/pic/WmFwZndlY21ZbXZjbVl2bUhjRWNtSVB2TmptRVBtbW1F.jpg",
      rating: 5,
      text:
        "An enraged woman battles a ring of violent organ smugglers after returning to her hometown to bury her mother.",
    },
    {
      id: Math.random(),
      title: "The Mauritanian",
      src:
        "https://best.egybest.film/wp-content/uploads/2021/02/The-Mauritanian.jpg",
      rating: 4,
      text:
        "A defense attorney, her associate and a military prosecutor uncover a far-reaching conspiracy while investigating the case for six years.",
    },
  ],
};

const NormalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MOVIE:
      return { ...state, movieTab: [...state.movieTab, payload] };
    case DELETE_MOVIE:
      return {
        ...state,
        movieTab: state.movieTab.filter((movie) => movie.id !== payload),
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movieTab: state.movieTab.map((movie) =>
          movie.id === payload.id ? { ...movie,title:payload.title,src:payload.src,rating:payload.rating,text:payload.text } : movie
        ),
      };

    default:
      return state;
  }
};

export default NormalReducer;
