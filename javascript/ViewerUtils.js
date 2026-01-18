import ParamsManager from './ParamsManager.js';
import Net from './Net.js';
/**サイトのユーティリティー*/
class ViewerUtils {
  constructor() {
    this.domParser = new DOMParser();
    /**URLパラメーター管理*/
    this.paramsManager = ParamsManager;
    this.net = Net;
  }

  //#region 取得系のユーティリティー
  /**DOMをHTMLElementに変換 @param {string} dom DOM*/
  domParse(dom) {
    return this.domParser.parseFromString(dom, 'text/html');
  }
  //#endregion
  /**背景の色を設定する @param {string} color 色*/
  setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }

  /**サイトの内容に関する物を初期化する*/
  initialize() {
    this.setBackgroundColor('#90d490');
  }
}
//外部に公開
export default new ViewerUtils();