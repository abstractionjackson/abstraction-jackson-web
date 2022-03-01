import { getPage } from "$lib/components/utils";

export  async function get(args) {
    try {
        const data = await getPage(args)
        return {
            body: data
        }
    } catch(error) {
        return {
            status: error
        }
    }
}