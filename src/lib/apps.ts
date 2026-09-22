export const getApps = async() => {
    try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/data.json`, {cache: 'force-cache'});
    const apps = await response.json();
    return apps;
} catch (error) {
    console.error('Error fetching apps:', error);
    return [];
}
}