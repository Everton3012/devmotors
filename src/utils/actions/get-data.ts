export async function getDataHome() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/66522eb8b6cce150ff097e90?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`);

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        return res.json();
    } catch (error) {
        throw new Error("Failed to fetch data");
    }
}