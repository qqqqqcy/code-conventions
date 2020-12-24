import _ from 'lodash'

function component() {
    var element = document.createElement('div')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    return element
}

const a = 1
let b = 2

console.log(a == b)

document.body.appendChild(component())
