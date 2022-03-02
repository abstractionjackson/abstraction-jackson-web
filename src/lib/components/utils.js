import qs from 'qs'

function getEnv(platform) {
    let STRAPI_API_TOKEN;
    let STRAPI_API_URL;
    if (import.meta.env.MODE === 'production' && platform) {
        STRAPI_API_TOKEN = platform.env.STRAPI_API_TOKEN
        STRAPI_API_URL = platform.env.STRAPI_API_URL
    } else {
        STRAPI_API_TOKEN = import.meta.env.VITE_STRAPI_API_TOKEN
        STRAPI_API_URL = import.meta.env.VITE_STRAPI_API_URL
    }
    return {
        STRAPI_API_TOKEN,
        STRAPI_API_URL
    }
}
export async function getPage({
    url,
    platform
}) {
    console.log("Get Page")
    const env = getEnv(platform)

    const query = qs.stringify({
        filters: {
            slug: {
                $eq: url.pathname.slice(1)
            }
        },
        populate:"*"
    })

    const strapi = new Strapi(env)
    const res = await strapi.get('pages', query)
    if (!res.ok) {
        throw new Error(res.statusText)
    }
    const data = await res.json()
    return data.data[0].attributes
}

export async function getPagesNamesAndSlugs({
    platform
}) {
    const env = getEnv(platform)
    const query = qs.stringify({
        fields: ['slug', 'name']
    })
    const strapi = new Strapi(env)

    const res = await strapi.get('pages', query)
    if (!res.ok) return { status: res.status }
    const data = await res.json()
    return {
        body: data
    }
}

class Strapi {
    constructor({
        STRAPI_API_URL,
        STRAPI_API_TOKEN
    }) {
        this.key = STRAPI_API_TOKEN
        this.url = STRAPI_API_URL
    }
    async get(endpoint, query) {
        const baseUrl = `${this.url}/api/${endpoint}`
        const url = query ? `${baseUrl}?${query}`
        : baseUrl
        return await fetch(url, {
            headers:  {
                Authorization: `Bearer ${this.key}`
            }
        })
    }

}