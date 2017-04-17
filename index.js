function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested')
}

function increaseRankBy(n) {
  const lists = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0, l = lists.length; i < l; i++) {
    lists[i].innerHTML = (parseInt(lists[i].innerHTML, 10) + n).toString()
  }
    return lists
}

function deepestChild() {
  const divs = document.getElementById('grand-node').querySelectorAll('div')
  let l = divs.length-1
  return divs[l]
}
