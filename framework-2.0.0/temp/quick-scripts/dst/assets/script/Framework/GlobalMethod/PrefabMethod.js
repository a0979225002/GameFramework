
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/GlobalMethod/PrefabMethod.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '40becGskYVIs5iVtW42xKsJ', 'PrefabMethod');
// script/Framework/GlobalMethod/PrefabMethod.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PrefabMethod = /** @class */ (function () {
    function PrefabMethod() {
    }
    /**
     * //TITLE:加載單一一個Prefab,並對該Prefab添加Script
     * @param {cc.Node : 父類node} parentScene
     * @param {string : 該prefab resources底下的url位置} PrefabURL
     * @param {string : 要對該prefab添加的script} ScriptName
     */
    PrefabMethod.onlyPrefabInit = function (parentScene, PrefabURL, ScriptName) {
        cc.loader.loadRes(PrefabURL, cc.Prefab, function (error, Prefab) {
            if (error) {
                cc.log("PrefabData.js_onlyPrefab_init():", error);
                return;
            }
            var prefabNode = cc.instantiate(Prefab);
            parentScene.addChild(prefabNode);
            prefabNode.addComponent(ScriptName);
        });
    };
    /**
     * //TITLE:加載Resources底下全部Prefab,並將該prefab轉成node物件
     * @param {string : 要載入的資料夾名稱} url
     * @param {object : 要將所有node物件存放的位置} prefabMap
     *  prefabMap : object(key : prefab name , value : node物件)
     */
    PrefabMethod.allPrefabInit = function (url, prefabMap) {
        cc.loader.loadResDir(url, cc.Prefab, function (error, Prefab) {
            if (error) {
                cc.log("PrefabData.js_allPrefab_init():", error);
                return;
            }
            for (var key in Prefab) {
                var prefabNode = cc.instantiate(Prefab[key]);
                prefabMap.set(Prefab[key]._name, prefabNode);
            }
        });
    };
    /**
     * //TITLE:尋訪該node底下一層節點
     * @param {cc.Node : 物件} node
     */
    PrefabMethod.loadNodeOneChildren = function (node) {
        var allNode = new Map();
        for (var i = 0; i < node.childrenCount; i++) {
            var n = node.children[i];
            for (var j = 0; j <= n.childrenCount; j++) { //尋訪node底下是否有子節點
                allNode.set(node.children[i].name, n); //view[子節點位置,子節點屬性]
            }
        }
        return allNode;
    };
    /**
     * //TITLE:尋訪該node底下兩層子節點
     * @param {node : 物件} node
     * return : 回傳 object(key: 該子類node URL, value:該子類node物件)
     */
    PrefabMethod.loadNodeTowChildren = function (node) {
        var allNode = new Map();
        for (var i = 0; i < node.childrenCount; i++) {
            var n = node.children[i]; //將該父節點屬性儲存
            var path = n.children[i].name; //將父節點位置儲存
            for (var j = 0; j <= n.childrenCount; j++) { //尋訪node底下是否有子節點
                // this.view[root.children[i].name] = n;
                if (j == 0) { //沒有子節點
                    allNode.set(n.children[i].name, n); //view[父節點位置,父節點屬性]
                }
                else { //有子節點
                    path += "/" + n.children[j - 1].name;
                    allNode.set(path, n.children[j - 1]); //view[子節點位置,子節點屬性]
                    path = n.children[i].name;
                }
            }
        }
        return allNode;
    };
    return PrefabMethod;
}());
exports.default = PrefabMethod;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEdsb2JhbE1ldGhvZFxcUHJlZmFiTWV0aG9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQW1GQSxDQUFDO0lBbEZHOzs7OztPQUtHO0lBQ0ksMkJBQWMsR0FBckIsVUFBc0IsV0FBb0IsRUFBRSxTQUFpQixFQUFFLFVBQWtCO1FBQzdFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsS0FBSyxFQUFFLE1BQU07WUFDM0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsRUFBRSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxLQUFLLENBQUMsQ0FBQTtnQkFDakQsT0FBTzthQUNWO1lBQ0QsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pDLFVBQVUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSwwQkFBYSxHQUFwQixVQUFxQixHQUFXLEVBQUUsU0FBK0I7UUFDN0QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxLQUFLLEVBQUUsTUFBTTtZQUN4RCxJQUFJLEtBQUssRUFBRTtnQkFDUCxFQUFFLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLEtBQUssQ0FBQyxDQUFBO2dCQUNoRCxPQUFPO2FBQ1Y7WUFDRCxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRTtnQkFDcEIsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDN0MsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ2hEO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksZ0NBQW1CLEdBQTFCLFVBQTJCLElBQWE7UUFFcEMsSUFBSSxPQUFPLEdBQXlCLElBQUksR0FBRyxFQUFFLENBQUM7UUFDOUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFDLGdCQUFnQjtnQkFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBLG1CQUFtQjthQUM1RDtTQUNKO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFFbkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxnQ0FBbUIsR0FBMUIsVUFBMkIsSUFBYTtRQUVwQyxJQUFJLE9BQU8sR0FBeUIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUU5QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsV0FBVztZQUNwQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBLFVBQVU7WUFFeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBQyxnQkFBZ0I7Z0JBQ3hELHdDQUF3QztnQkFFeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsT0FBTztvQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBLG1CQUFtQjtpQkFDekQ7cUJBQU0sRUFBQyxNQUFNO29CQUNWLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsbUJBQW1CO29CQUN4RCxJQUFJLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7aUJBQzdCO2FBQ0o7U0FDSjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFTCxtQkFBQztBQUFELENBbkZBLEFBbUZDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVmYWJNZXRob2Qge1xyXG4gICAgLyoqXHJcbiAgICAgKiAvL1RJVExFOuWKoOi8ieWWruS4gOS4gOWAi1ByZWZhYizkuKblsI3oqbJQcmVmYWLmt7vliqBTY3JpcHRcclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZSA6IOeItumhnm5vZGV9IHBhcmVudFNjZW5lXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZyA6IOipsnByZWZhYiByZXNvdXJjZXPlupXkuIvnmoR1cmzkvY3nva59IFByZWZhYlVSTFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmcgOiDopoHlsI3oqbJwcmVmYWLmt7vliqDnmoRzY3JpcHR9IFNjcmlwdE5hbWVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIG9ubHlQcmVmYWJJbml0KHBhcmVudFNjZW5lOiBjYy5Ob2RlLCBQcmVmYWJVUkw6IHN0cmluZywgU2NyaXB0TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoUHJlZmFiVVJMLCBjYy5QcmVmYWIsIGZ1bmN0aW9uIChlcnJvciwgUHJlZmFiKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiUHJlZmFiRGF0YS5qc19vbmx5UHJlZmFiX2luaXQoKTpcIiwgZXJyb3IpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHByZWZhYk5vZGUgPSBjYy5pbnN0YW50aWF0ZShQcmVmYWIpO1xyXG4gICAgICAgICAgICBwYXJlbnRTY2VuZS5hZGRDaGlsZChwcmVmYWJOb2RlKTtcclxuICAgICAgICAgICAgcHJlZmFiTm9kZS5hZGRDb21wb25lbnQoU2NyaXB0TmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAvL1RJVExFOuWKoOi8iVJlc291cmNlc+W6leS4i+WFqOmDqFByZWZhYizkuKblsIfoqbJwcmVmYWLovYnmiJBub2Rl54mp5Lu2XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZyA6IOimgei8ieWFpeeahOizh+aWmeWkvuWQjeeosX0gdXJsXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdCA6IOimgeWwh+aJgOaciW5vZGXnianku7blrZjmlL7nmoTkvY3nva59IHByZWZhYk1hcFxyXG4gICAgICogIHByZWZhYk1hcCA6IG9iamVjdChrZXkgOiBwcmVmYWIgbmFtZSAsIHZhbHVlIDogbm9kZeeJqeS7tilcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFsbFByZWZhYkluaXQodXJsOiBzdHJpbmcsIHByZWZhYk1hcDogTWFwPHN0cmluZywgY2MuTm9kZT4pIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0Rpcih1cmwsIGNjLlByZWZhYiwgZnVuY3Rpb24gKGVycm9yLCBQcmVmYWIpIHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJQcmVmYWJEYXRhLmpzX2FsbFByZWZhYl9pbml0KCk6XCIsIGVycm9yKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBQcmVmYWIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwcmVmYWJOb2RlID0gY2MuaW5zdGFudGlhdGUoUHJlZmFiW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgcHJlZmFiTWFwLnNldChQcmVmYWJba2V5XS5fbmFtZSwgcHJlZmFiTm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogLy9USVRMRTrlsIvoqKroqbJub2Rl5bqV5LiL5LiA5bGk56+A6bueXHJcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGUgOiDnianku7Z9IG5vZGVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGxvYWROb2RlT25lQ2hpbGRyZW4obm9kZTogY2MuTm9kZSk6IE1hcDxzdHJpbmcsIGNjLk5vZGU+IHtcclxuXHJcbiAgICAgICAgbGV0IGFsbE5vZGU6IE1hcDxzdHJpbmcsIGNjLk5vZGU+ID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG4gPSBub2RlLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBuLmNoaWxkcmVuQ291bnQ7IGorKykgey8v5bCL6Kiqbm9kZeW6leS4i+aYr+WQpuacieWtkOevgOm7nlxyXG4gICAgICAgICAgICAgICAgYWxsTm9kZS5zZXQobm9kZS5jaGlsZHJlbltpXS5uYW1lLCBuKTsvL3ZpZXdb5a2Q56+A6bue5L2N572uLOWtkOevgOm7nuWxrOaAp11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsTm9kZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAvL1RJVExFOuWwi+ioquipsm5vZGXlupXkuIvlhanlsaTlrZDnr4Dpu55cclxuICAgICAqIEBwYXJhbSB7bm9kZSA6IOeJqeS7tn0gbm9kZVxyXG4gICAgICogcmV0dXJuIDog5Zue5YKzIG9iamVjdChrZXk6IOipsuWtkOmhnm5vZGUgVVJMLCB2YWx1ZTroqbLlrZDpoZ5ub2Rl54mp5Lu2KVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbG9hZE5vZGVUb3dDaGlsZHJlbihub2RlOiBjYy5Ob2RlKTogTWFwPHN0cmluZywgY2MuTm9kZT4ge1xyXG5cclxuICAgICAgICBsZXQgYWxsTm9kZTogTWFwPHN0cmluZywgY2MuTm9kZT4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG4gPSBub2RlLmNoaWxkcmVuW2ldOy8v5bCH6Kmy54i256+A6bue5bGs5oCn5YSy5a2YXHJcbiAgICAgICAgICAgIGxldCBwYXRoID0gbi5jaGlsZHJlbltpXS5uYW1lOy8v5bCH54i256+A6bue5L2N572u5YSy5a2YXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBuLmNoaWxkcmVuQ291bnQ7IGorKykgey8v5bCL6Kiqbm9kZeW6leS4i+aYr+WQpuacieWtkOevgOm7nlxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy52aWV3W3Jvb3QuY2hpbGRyZW5baV0ubmFtZV0gPSBuO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChqID09IDApIHsvL+aykuacieWtkOevgOm7nlxyXG4gICAgICAgICAgICAgICAgICAgIGFsbE5vZGUuc2V0KG4uY2hpbGRyZW5baV0ubmFtZSwgbik7Ly92aWV3W+eItuevgOm7nuS9jee9rizniLbnr4Dpu57lsazmgKddXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Ugey8v5pyJ5a2Q56+A6bueXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSBcIi9cIiArIG4uY2hpbGRyZW5baiAtIDFdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsTm9kZS5zZXQocGF0aCwgbi5jaGlsZHJlbltqIC0gMV0pOy8vdmlld1vlrZDnr4Dpu57kvY3nva4s5a2Q56+A6bue5bGs5oCnXVxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBuLmNoaWxkcmVuW2ldLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbE5vZGU7XHJcbiAgICB9XHJcblxyXG59Il19