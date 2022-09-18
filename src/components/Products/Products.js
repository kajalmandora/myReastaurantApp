import React,{Component} from 'react';

class Products extends Component{

    constructor(props){
        super(props);
        this.state = {
            cart: 0,
            products: [
                {
                    id: 101,
                    name: "product 1",
                    quantity: 0,
                    cost:500,
                },
                {
                    id: 102,
                    name: "product 2",
                    quantity: 0,
                    cost: 300,
                },
                {
                    id: 103,
                    name: "product 3",
                    quantity: 0,
                    cost: 200,
                }
            ]
        }
    }

render(){
        return(
            <div>
                {this.state.products.length != 0? <div>
                    {this.state.products.map(item => {
                        return (<div>
                            <h3>{item.name} : {item.quantity}</h3> 
                            <button>ADD</button>   
                            <button>Remove</button>
                        </div>);
                    } )}
                </div>:<h1>Product list is empty</h1>}
            </div>
        );
    }
    increaseQuantity(id){
        let newList =[...this.state.products];
        let cart= this.state.cart;
        for(let i=0;i<newList.length;i++){
            if(newList[i].id==id){
                newList[i].quantity +=1;
                newcart +=1;
            }
        }
        this.setState({cart: newcart, products:newList})
    }

}

export default Products;
