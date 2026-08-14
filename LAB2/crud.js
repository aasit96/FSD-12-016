import readline from "readline/promises";
import{stdin,stdout} from "process";
import {readFile,writeFile} from "fs/promises";

const FILE="product.json";

const getCart =()=>{
const data = await readFile(FILE, "UTF-8");
return JSON.parse(data);
}
const saveCart =()=>{
   await writeFile(FILE,JSON.stringify(myCart ,null, 2));
};
const addToCart = async (product)=>{
    const myCart = await getCart();
    const isFound = myCart.find((item)=>item.id===product.id);
    if(isFound){
            isFound.qty+=product.qty;
    }
    else{
        myCart.push(product);
    }
    await saveCart(mycart);
    console.log(`product added/updated with id ${product.id} into cart`);
};

const main = async ()=>{
    let choice;
    const cin = readline.createInterface({input:stdin, output:stdout});

        do{
    console.log("welcome to Flipkart🤦");
    console.log('1...........Show cart')
        console.log("2...........Add product");
            console.log("3...........Remove Product");
                console.log("4..........Update Quantity");
                    console.log("5...........Exit");
           choice = await cin.question("Enter your choice:");
           switch (Number(choice)) {
             case 1:
               console.log("show products");
               break;
             case 2:
               console.log("add product");
               break;
             case 3:
               console.log("remove product");
               break;
             case 4:
               console.log("update quantity");
               break;
             case 5:
               console.log("see you later");
               break;
               default:
                console.log("Invalid choice! try again😢");
           }
        } while(choice!=5);
        cin.close();
};
main()

