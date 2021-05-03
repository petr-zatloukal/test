import fetchUrl from './../shared/fetchUrl/fetchUrl';

export async function getBooksByType(type: string, offset: number, pageSize: number) {
    try {
        return await fetchUrl(`https://www.googleapis.com/books/v1/volumes?q=${type}&startIndex=${offset}&maxResults=${pageSize}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        });
    } catch (exception) {
        return [];

    }
}

