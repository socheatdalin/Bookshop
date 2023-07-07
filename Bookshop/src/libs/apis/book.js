var book = {
        async all() {
                try{
                        const res = await fetch('http://localhost:3001/book/all', {
                                method: "GET",
                                // credentials: "include",
                                headers: {
                                        "Content-type": "application/json",
                                        // Origin: "http://localhost:3000"
                                },

                        });
                        
                        const result = await res.json();
                        if (!result?.length) return [];

                        return result;
                }
                catch(err){
                        console.log(err);
                }
                // try {
                //         const response = await fetch('http://127.0.0.1:3001/book/all', {
                //                 method: 'GET',
                //                 headers: {
                //                         "Content-type": "application/json",
                //                         Origin: "http://127.0.0.1:3000",
                //                 },
                //         });

                //         if (!response.ok) {
                //                 throw new Error(`Error! status: ${response.status}`);
                //         }

                //         const result = await response.json();
                //         return result;
                // } 
                // catch (err) {
                //         console.log(err);
                // }
        },

}


export default book