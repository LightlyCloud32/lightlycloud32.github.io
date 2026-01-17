/**サイトのユーティリティー*/
class ViewerUtils {
  /**@param {Document} doc ドキュメント*/
  constructor(doc) {
    /**@type {Document} ドキュメント*/
    this.document = doc;
    this.domParser = new DOMParser();
  }

  //#region 取得系のユーティリティー
  /**Webサーバーのコンテンツを取得する @param {string} url 取得先のURL*/
  async fetch(url) {
    return (await (await fetch(url)).text()).toString();
  }
  /**DOMをHTMLElementに変換 @param {string} dom DOM*/
  domParse(dom) {
    return this.domParser.parseFromString(dom, 'text/html');
  }
  //#endregion
  /**背景の色を設定する @param {string} color 色*/
  setBackgroundColor(color) {
    this.document.body.style.backgroundColor = color;
  }

  /**サイトの内容に関する物を初期化する*/
  initialize() {
    this.setBackgroundColor('#90d490');
  }
}
//外部に公開
export default ViewerUtils;