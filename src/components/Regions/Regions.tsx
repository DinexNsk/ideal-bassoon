import React, { memo } from 'react';

import styles from './Regions.module.css';
import { RegionItem } from '../../redux/regions';
import { TreeElement } from '../TreeElement/TreeElement';

import { NestedTreeWithChildrens, makeNestedTreeWithChildrens} from '../../utils'


interface Props {
    data: RegionItem[]
};

export const Regions = memo(({
    data = [],
}: Props) => {

    const withChildNotes: NestedTreeWithChildrens[] = makeNestedTreeWithChildrens(data);

    return (
        <div className={styles.container}>
            {withChildNotes.map(el => (
               <TreeElement region={el} key={`rootId-${el.id}`} level={1}/> 
            ))}
        </div>
    );
});
