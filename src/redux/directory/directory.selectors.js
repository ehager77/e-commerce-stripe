import { createSelector } from 'reselect';

import {} from '../../redux/directory/directory.selectors'
const selectDirectory = state => state.directory;

export const selectDirectorySection = createSelector(
    [selectDirectory],
    directory => directory.sections
);