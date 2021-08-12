export const loadTemps = () => ({
    type: "LOAD_TEMPS"
});

export const loadTempsSuccess = (data) => ({
    type: "LOAD_TEMPS_SUCCESS",
    payload: data
});

export const loadTempsFail = (error) => ({
    type: "LOAD_TEMPS_FAIL",
    payload: error
});