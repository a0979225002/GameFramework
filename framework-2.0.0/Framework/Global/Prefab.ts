namespace fcc {

    export namespace global {
        /**
         * @Author XIAO-LI-PIN
         * @Description 共用:Prefab方法
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export class Prefab {

            /**
             * 尋訪該node底下一層節點內所有物件
             * @param {cc.Node} node - 父節點
             * @return {Map<string, cc.Node>} - Map(key: 該子類node URL, value:該子類node物件)
             */
            static getNodeOneChildren(node: cc.Node): Map<string, cc.Node> {
                let allNode: Map<string, cc.Node> = new Map();
                for (let i = 0; i < node.childrenCount; i++) {
                    let n = node.children[i];
                    for (let j = 0; j <= n.childrenCount; j++) {//尋訪node底下是否有子節點
                        allNode.set(node.children[i].name, n);//view[子節點位置,子節點屬性]
                    }
                }
                return allNode;
            }

            /**
             * 尋訪該node底下兩層子節點
             * @param {node : 物件} node - 父節點
             * @return {Map<string, cc.Node>} - Map(key: 該子類node URL, value:該子類node物件)
             */
            static getNodeTowChildren(node: cc.Node): Map<string, cc.Node> {
                let allNode: Map<string, cc.Node> = new Map();
                for (let i = 0; i < node.childrenCount; i++) {
                    let n = node.children[i];//將該父節點屬性儲存
                    let path = n.children[i].name;//將父節點位置儲存
                    for (let j = 0; j <= n.childrenCount; j++) {//尋訪node底下是否有子節點
                        // this.view[root.children[i].name] = n;
                        if (j == 0) {//沒有子節點
                            allNode.set(n.children[i].name, n);//view[父節點位置,父節點屬性]
                        } else {//有子節點
                            path += "/" + n.children[j - 1].name;
                            allNode.set(path, n.children[j - 1]);//view[子節點位置,子節點屬性]
                            path = n.children[i].name;
                        }
                    }
                }
                return allNode;
            }
        }
    }
}