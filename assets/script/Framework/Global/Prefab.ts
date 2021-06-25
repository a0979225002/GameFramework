export default class Prefab {

    /**
     * 加載單一一個Prefab,並對該Prefab添加Script
     * @param {cc.Node} parentScene - 父類node
     * @param {string} PrefabURL - 該prefab resources底下的url位置
     * @param {string} ScriptName - 要對該prefab添加的script
     */
    static onlyPrefabInit(parentScene: cc.Node, PrefabURL: string, ScriptName: string) {
        cc.loader.loadRes(PrefabURL, cc.Prefab, function (error, Prefab) {
            if (error) {
                cc.log("PrefabData.js_onlyPrefab_init():", error)
                return;
            }
            let prefabNode = cc.instantiate(Prefab);
            parentScene.addChild(prefabNode);
            prefabNode.addComponent(ScriptName);
        });
    }

    /**
     * 加載Resources底下全部Prefab,並將該prefab轉成node物件
     * @param {string} url - 要載入的資料夾地址
     * @param {Map<string, cc.Node>} prefabMap 要將所有node物件存放的位置
     */
    static allPrefabInit(url: string, prefabMap: Map<string, cc.Node>) {
        cc.loader.loadResDir(url, cc.Prefab, function (error, Prefab) {
            if (error) {
                cc.log("PrefabData.js_allPrefab_init():", error)
                return;
            }
            for (let key in Prefab) {
                let prefabNode = cc.instantiate(Prefab[key]);
                prefabMap.set(Prefab[key]._name, prefabNode);
            }
        })
    }

    /**
     * 尋訪該node底下一層節點內所有物件
     * @param {cc.Node} node - 父節點
     * @return {Map<string, cc.Node>} - Map(key: 該子類node URL, value:該子類node物件)
     */
    static loadNodeOneChildren(node: cc.Node): Map<string, cc.Node> {
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
    static loadNodeTowChildren(node: cc.Node): Map<string, cc.Node> {
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