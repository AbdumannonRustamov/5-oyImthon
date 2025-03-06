export const fetchData = async  (url) => {
    const req = await fetch(url);

    if(!req.ok){
        throw new Error("something went wrong");
    }
    const data = await req.json();
    return data;
}