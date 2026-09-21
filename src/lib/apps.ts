export const getApps = async() => {
    const response = await fetch('http://localhost:3000/data.json');
    const apps = await response.json();
    return apps;
}