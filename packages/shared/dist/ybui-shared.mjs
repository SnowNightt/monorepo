import lodash from "lodash";
function useLodash() {
  return lodash;
}
function hello(str = "world") {
  const txt = "hello " + str;
  alert(txt);
  return txt;
}
export {
  hello,
  useLodash
};
