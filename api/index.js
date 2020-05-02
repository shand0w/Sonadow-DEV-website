var myHeaders = new Headers();
const versions = '{"pixelzone" : "105", "sonadowrpg" : "101"}';
const obj = JSON.parse(versions);
async function getVersion() {
  game = myHeaders.get('GameName')
  return (obj.pixelzone)
}
