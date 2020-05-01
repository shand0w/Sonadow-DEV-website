var myHeaders = new Headers();
async function getVersion() {
  game = myHeaders.get('GameName')
  if game == 'pixelzone'{
    return '105'
  }
  if game == 'sonadowrpg'{
    return '001'
  }
}
