import vu from '../javascript/ViewerUtils.js';
vu.initialize();
//テスト
console.log(vu.domParse(await vu.fetch('./view.html')));
export default global;