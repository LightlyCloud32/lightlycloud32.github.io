class Net {
  /**Webサーバーのコンテンツを取得する @param {string} url 取得先のURL*/
  async fetch(url) {
    return (await (await fetch(url)).text()).toString();
  }
  /**ファイルを取得する @param {string} path ディレクトリ @param {string | null} param パラメーター*/
  async fetchFile(path, param) {
    const url = `${location.origin}${location.pathname}${path}/${param}`;
    var f = await this.fetch(url);
    //エラー処理
    if(!param && param !== '') f = '<h1 id="Error">Bad Request</h1>';
    if(f.includes('404')) f = '<h1 id="Error">Not Found</h1>';
    return f;
  }
}
export default new Net();