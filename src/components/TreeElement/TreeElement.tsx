import React, { memo, useState } from 'react';

import icon from '../../assets/logo192.png';
import { NestedTreeWithChildrens } from '../../utils';

import styles from './TreeElement.module.css';


interface Props {
    region: NestedTreeWithChildrens;
    level: number;
};


export const TreeElement = memo(({
    region,
    level,
}: Props) => {
    const [expand, setExpand] = useState(false);

    const expandItems = () => {
        setExpand(!expand);
    };
    const arrowClassName = expand ? `${styles.arrow} ${styles.down}` : `${styles.arrow} ${styles.right}`;

    return (
        <>
            <div className={styles.content}>
                <i className={arrowClassName} onClick={expandItems}></i>
                <img src={icon} alt='icon' className={styles.icon} />
                <span className={styles.name}>{region.name}</span>
            </div>

            {region.children && region.children.map(el => (
                <div
                    style={{
                        opacity: expand ? 1 : 0,
                        height: expand ? 'auto' : 0,
                        marginLeft: 10*level,
                    }}
                    key={`id-${el.id}`}
                >
                    <TreeElement region={el} level={level + 1} />
                </div>
            ))}
        </>
    );
});
