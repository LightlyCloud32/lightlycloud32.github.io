/**サイトのユーティリティー*/
class ViewerUtils {
  constructor() {
    this.domParser = new DOMParser();
  }

  /**初期化する @param {Document} doc ドキュメント*/
  initialize(doc) {
    doc.body.style.backgroundColor = '#90d490';
  }
  /**Webサーバーのコンテンツを取得する @param {string} url 取得先のURL*/
  async fetch(url) {
    return (await (await fetch(url)).text()).toString();
  }
  /**DOMをHTMLElementに変換 @param {string} dom DOM*/
  domParse(dom) {
    return this.domParser.parseFromString(dom, 'text/html');
  }
}
//外部に公開
const viewerUtils = new ViewerUtils();
export default viewerUtils;