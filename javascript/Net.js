class Net {
  /**Webサーバーのコンテンツを取得する @param {string} url 取得先のURL*/
  async fetch(url) {
    return (await (await fetch(url)).text()).toString();
  }
  /**ファイルを取得する @param {string} path ディレクトリ @param {string | null} param パラメーター*/
  async fetchFile(path, param) {
    var p = param;
    if(p === '') p = 'index';
    console.log(`P: ${p}`);
    const url = `${location.origin}${location.pathname}${path}/${p}`;
    var f = '';
    try {
      f = await this.fetch(url);
      //エラー処理
      if(!param && param !== '') f = '<h1 id="Error">Bad Request</h1>';
      if(f.includes('404')) f = '<h1 id="Error">Not Found</h1>';
    } catch {
      f = '<h1 id="Error">Fetch Error</h1>'
    }
    if(f.includes('Error')) console.error(`Error: ${f}`);
    return f;
  }
}
export default new Net();