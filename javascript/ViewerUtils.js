import ParamsManager from './ParamsManager.js';
/**サイトのユーティリティー*/
class ViewerUtils {
  constructor() {
    this.domParser = new DOMParser();
    /**URLパラメーター管理*/
    this.paramsManager = ParamsManager;
  }

  //#region 取得系のユーティリティー
  /**Webサーバーのコンテンツを取得する @param {string} url 取得先のURL*/
  async fetch(url) {
    return (await (await fetch(url)).text()).toString();
  }
  /**ファイルを取得する @param {string} path ディレクトリ*/
  async fetchFile(path) {
    const param = this.paramsManager.getParam('f'); //ファイルパラメーターの取得
    const url = `${location.origin}${location.pathname}${path}/${param}`;
    var f = await this.fetch(url);
    //エラー処理(意味的に当てはまるエラーメッセージ)
    if(!param) f = '<h1 id="Error">400 Bad Request</h1>';
    if(f.includes('404')) f = '<h1 id="Error">404 Not Found</h1>';
    return f;
  }
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