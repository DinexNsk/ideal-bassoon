import { RegionItem } from '../redux/regions';

export type NestedTreeWithChildrens = RegionItem & { children?: NestedTreeWithChildrens[] };

type Root = RegionItem & { children: RegionItem}

export const makeNestedTreeWithChildrens = (data): NestedTreeWithChildrens[] => {
    const root = [];
    const copiedData = [...data];

    copiedData.forEach(node => {
        if (node.path.length === 1) {
            return root.push(node);
        };

        let parentIndex = copiedData.findIndex(el => el.path === node.path.substring(0, node.path.length - 2));

        if (!copiedData[parentIndex].children) {
            return copiedData[parentIndex].children = [node];
        }
        copiedData[parentIndex].children.push(node);
    });
    return root;
};