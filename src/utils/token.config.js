export default function config(tk){
  const config = {
      headers: {
          Authorization: `Bearer ${tk}`
      }
  }
  return config
}