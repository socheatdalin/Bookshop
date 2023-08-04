var category = {
        async all(){
                const res = await fetch('https://dalin-bookshop-api.onrender.com/category/all',{
                        method: "GET",
                });
                const result = await res.json();
                if (!result?.length) return [];
                return result;
        },
        async update({ id,name, desc, imageUrl }) {
                const res = await fetch(`https://dalin-bookshop-api.onrender.com/category/update/`, {
                        method: "POST",
                        credentials: "include",
                        headers: {
                                "Content-type": "application/json",
                        },
                        body: JSON.stringify({_id:id, name, desc, imageUrl }),
                });

                const result = await res.json();
                return result;
        },
        async delete({id}){
                await fetch(`https://dalin-bookshop-api.onrender.com/category/delete`,{
                        method: "POST",
                        credentials: "include",
                        headers: {
                                "Content-type": "application/json",
                        },
                        body: JSON.stringify({ _id:id}),
                });
                const result = await res.json();
                return result;
        },
        
}

export default category