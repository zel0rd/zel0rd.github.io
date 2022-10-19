import { data } from './data.js';

let vms = []
let path = "/root"

function vmWithPath(data, current_path) {
    addToVms(data, current_path)

    let subFolderList = getSubfoldersToList(data)
    subFolderList.map(subpath => {
        vmWithPath(data.subfolders[subpath], current_path + '/' + subpath)
    })
}

function addToVms(data, current_path) {
    data.vm.map(e => vms.push(current_path + '/' + e))
}

function getSubfoldersToList(data) {
    let paths = Object.keys(data.subfolders)
    return paths
}

vmWithPath(data, path)
console.log(vms)