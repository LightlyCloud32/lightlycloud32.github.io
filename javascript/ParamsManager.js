/**URLパラメーターマネージャー*/
class ParamsManager {
  constructor() {
    /**@type {URLSearchParams}*/
    this.searchParams = new URLSearchParams(location.search);
  }

  /**パラメーターが存在するか @param {string} name 名前*/
  hasParam(name) {
    return this.searchParams.has(name);
  }
  /**パラメーターを取得する @param {string} name 名前*/
  getParam(name) {
    return this.searchParams.get(name);
  }
  /**パラメーターを設定する @param {string} name 名前 @param {any} value 値*/
  setParam(name, value) {
    this.searchParams.set(name, value);
  }
  /**パラメーターのURLを取得する*/
  getParamsURL() {
    var result = [];
    this.searchParams.forEach((val, key) => result.push(`${key}=${val}`));
    return `?${result.join('&')}`;
  }
  /**パラメーターとページを更新する*/
  refresh() {
    location.replace(`${location.origin}${location.pathname}${this.getParamsURL()}`);
  }
}
//外部に公開
const paramsManager = new ParamsManager();
globalThis.module_paramsManager = paramsManager;
export default paramsManager;