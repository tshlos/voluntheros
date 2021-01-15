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

// export async function fetchAnElderly(id) {
//     const resp = await fetch(`${API}/elderlies/${id}`, {
//     })
//     return await resp.json()
// }

export async function createElderly(data) {
    const resp = await fetch(`${API}/elderlies`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
    return await resp.json()
}


//  Volunteer Calls

export async function fetchVolunteers() {
    const resp = await fetch(`${API}/volunteers`, {
    })
    return await resp.json()
}

//  Task Calls

export async function fetchTasks() {
    const resp = await fetch(`${API}/tasks`, {
    })
    return await resp.json()
}

export async function createTasks(data) {
    const resp = await fetch(`${API}/tasks`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
    return await resp.json()
}