var category = {
        async all(){
                const res = await fetch('http://localhost:3001/category/all',{
                        method: "GET",
                });
                const result = await res.json();
                if (!result?.length) return [];
                return result;
        },
        
        
}

export default category