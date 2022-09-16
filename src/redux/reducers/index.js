const initialState = {
    obj: {
        artists: [],
    },
};

const mainReducer = (state = initialState, action) => {
    // da questa funzione, in ogni possibile situazione
    // io devo restituire il NUOVO STATO dell'applicativo
    switch (action.type) {
        case "ADD_TO_ARTISTS":
            return {
                ...state,
                obj: {
                    ...state.obj,
                    artists: [...state.obj.artists, action.payload],
                    //   NON FARE!!! content: state.cart.content.push(action.payload)
                    //   content: state.cart.content.concat(action.payload),
                },
            };
        default:
            return state;
        // worst case scenario: torno lo stato come l'ho appena trovato
        // --> senza rompere niente
    }
};

export default mainReducer;
