var Cart = {
        async all() {
                const res = await fetch("https://dalin-bookshop-api.onrender.com/cart/all", {
                  method: "GET",
                  credentials: "include",
                  headers: {
                    "Content-type": "application/json",
                    Origin: "https://dalin-bookshop-api.onrender.com",
                  },
                });
            
                const result = await res.json();
                if (!result?.length) return [];
            
                return result;
              },
        async create({ book, price , quantity, total }) {
                  const res = await fetch("https://dalin-bookshop-api.onrender.com/item/create", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                      "Content-type": "application/json",
                    },
                    body: JSON.stringify({  book, price , quantity, total}),
                  });
              
                  const result = await res.json();
                  return result;
                },     
}
export default Cart