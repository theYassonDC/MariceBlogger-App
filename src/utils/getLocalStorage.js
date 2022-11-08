export default function getlocalStorage(){
  return JSON.parse(window.localStorage.getItem("user"))
}