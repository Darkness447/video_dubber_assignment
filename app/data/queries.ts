export async function getUserData(){
    const res = await fetch("https://640f839c4ed25579dc50e8b3.mockapi.io/CRUd", { next: { tags: ['collection'] } })
    const data = await res.json();
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    
    return data
}