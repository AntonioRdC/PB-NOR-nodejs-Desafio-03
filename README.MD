## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Routes:
```bash
## Entity Employee 
route POST '/employee'
route GET '/employee'
route PUT '/employee/:id'
route DELETE '/employee/:id'
## Values
{
 "name": "teste",
 "cpf": "99999999999",
 "office": "gerente",
 "birthday": "30/04/2021"
}

## Entity Product
route POST '/product'
route GET '/product'
route PUT '/product/:id'
route DELETE '/product/:id'
## Values
{
 "name": "teste",
 "category": "eletronico",
 "price": "19.99",
 "employee_id": "62e30f062617850d7e4e0d49"
}
```
