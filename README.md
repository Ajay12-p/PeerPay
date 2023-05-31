# superfluid-wavepool

## Authors

- [@TrymbakMahant](https://github.com/Trymbakmahant)

## Npm package Link :- https://www.npmjs.com/package/peerpaysdk?activeTab=readme

## how to use Localy 

#### client
npm install 
npm start

#### Question 2

npm install 
npm start



## PeerPay

```javascript
import PeerPay from "peerpaysdk";

function App() {
  return <PeerPay  price= " price of product " ,
  limit = "limit of product for rent",
  api = " you api ",
  image  = "URL of image  ",
  name  = "Product name ",
  detail  = "Detail of product",
  maxtime  = "max days for giving product",
  backgroundColor = " you can change background color of button",
  color =" you can change the color of text" ,
  />;
}
```

## Parameter which need to pass on to the components

| Parameter | Type     | Description                                                                           |
| :-------- | :------- | :------------------------------------------------------------------------------------ |
| `price`   | `string` | **Required**. price of product                                                        |
| `limit`   | `string` | **Required**. limit of product for rent                                               |
| `api`     | `string` | **Required**. Your API key which you get form https://superfluid-wavepool.vercel.app/ |
| `image`   | `string` | **Required**. image link of product                                                   |
| `name`    | `string` | **Required**. name of your product                                                    |
| `detail`  | `string` | **Required**. a brief detail of product                                               |
| `maxtime` | `string` | **Required**. max time of which you can rent the product                              |

## DEMO image of payment gateway
![Logo](https://res.cloudinary.com/dxfejxnvp/image/upload/v1684995645/image_of_payment_s0aten.png)
