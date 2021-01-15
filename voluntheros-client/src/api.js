const API = 'http://localhost:3000';

const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
}

//  Elderly Calls

export async function fetchElderly() {
    const resp = await fetch(`${API}/elderlies`, {
    })
    return await resp.json()
}

export async function createElderly(data) {
    const resp = await fetch(`${API}/elderlies`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
    return await resp.json()
}


//  Volunteer Calls
//  Task Calls

export async function fetchTasks() {
    const resp = await fetch(`${API}/tasks`, {
    })
    return await resp.json()
}