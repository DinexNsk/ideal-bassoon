import { RegionState } from './regions';

interface AppState {
    regions: RegionState,
}

export const regionsSelector = (state: AppState) => state.regions.data;