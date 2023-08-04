var book ={
        async all(){
            try{
                    const res = await fetch('https://dalin-bookshop-api.onrender.com/book/all', {
                                method: 'GET',
                        });
                        const result = await res.json();
                        return result;
            }
            catch(err){
                console.log(err);
            }
        },
        
}

export default book