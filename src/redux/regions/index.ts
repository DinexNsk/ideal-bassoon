export const SET_REGIONS = 'SET_REGIONS';

export interface RegionItem {
    id: number;
    name: string;
    path: string;
}

export interface SetRegionsAction {
    type: typeof SET_REGIONS;
    payload: RegionItem[] | undefined;
}

export const regionAction = (payload: RegionItem[]) => ({
    type: SET_REGIONS,
    payload,
})

export type SetRegions = (payload?: RegionItem[]) => SetRegionsAction;

export interface RegionState {
    data: RegionItem[],
};

const initialState: RegionState = {
    data: [],
};

export const regionsReducer = (state = initialState, action: SetRegionsAction ): RegionState => {

    switch (action.type) {
        case SET_REGIONS:
            return {
                ...state,
                data: action.payload
            };

        default:
            return state;
    };
};


